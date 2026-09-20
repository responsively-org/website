import assert from 'node:assert/strict';
import {test} from 'node:test';
import {
  getLatestBetaRelease,
  getReleaseDownloadLinks,
  parseDownloadRelease,
} from '../src/utils/releases.ts';

const releaseURL = 'https://github.com/responsively-org/responsively-app-releases/releases';
const asset = name => ({
  name,
  browser_download_url: `${releaseURL}/download/v2.0.0-beta.0/${encodeURIComponent(name)}`,
});
const release = (overrides = {}) => ({
  tag_name: 'v2.0.0-beta.0',
  html_url: `${releaseURL}/tag/v2.0.0-beta.0`,
  published_at: '2026-09-20T10:00:00Z',
  prerelease: true,
  draft: false,
  assets: [asset('ResponsivelyApp-2.0.0-beta.0-arm64.dmg')],
  ...overrides,
});

test('parses release metadata without reconstructing release or asset URLs', () => {
  const input = release();
  assert.deepEqual(parseDownloadRelease(input), input);
  assert.deepEqual(parseDownloadRelease(release({assets: []}))?.assets, []);
});

test('rejects malformed required metadata and API failure responses', () => {
  for (const input of [
    null,
    [],
    {message: 'API rate limit exceeded'},
    release({tag_name: ''}),
    release({tag_name: 2}),
    release({html_url: 'javascript:alert(1)'}),
    release({published_at: null}),
    release({published_at: 'not a date'}),
    release({prerelease: 'true'}),
    release({draft: undefined}),
    release({assets: null}),
  ]) {
    assert.equal(parseDownloadRelease(input), null);
  }
});

test('keeps usable assets when other entries are malformed or unsafe', () => {
  const installer = asset('ResponsivelyApp.exe');
  const parsed = parseDownloadRelease(
    release({
      assets: [
        null,
        {},
        {name: '', browser_download_url: installer.browser_download_url},
        {name: 'unsafe.exe', browser_download_url: 'javascript:alert(1)'},
        {name: 'insecure.exe', browser_download_url: 'http://example.com/app.exe'},
        {name: 'invalid.exe', browser_download_url: 'not a URL'},
        installer,
      ],
    })
  );
  assert.deepEqual(parsed?.assets, [installer]);
});

test('only selects published beta prereleases, excluding stable, drafts, alpha and RC', () => {
  const beta = release();
  assert.deepEqual(
    getLatestBetaRelease([
      release({tag_name: 'v2.1.0', prerelease: false}),
      release({tag_name: 'v2.1.0-beta.0', draft: true}),
      release({tag_name: 'v2.1.0-beta.1', prerelease: false}),
      release({tag_name: 'v2.1.0-alpha.0'}),
      release({tag_name: 'v2.1.0-rc.0'}),
      release({tag_name: 'v2.1.0-betamax'}),
      release({tag_name: 'v2.1.0-beta.2', published_at: null}),
      beta,
    ]),
    beta
  );
});

test('selects the newest publication date regardless of list order or version number', () => {
  const older = release({tag_name: 'v3.0.0-beta.0', published_at: '2026-09-19T20:00:00Z'});
  const newest = release({tag_name: 'v2.0.0-beta.1', published_at: '2026-09-20T12:00:00+01:00'});
  for (const entries of [
    [older, newest],
    [newest, older],
  ]) {
    assert.deepEqual(getLatestBetaRelease(entries), newest);
  }
});

test('distinguishes no beta from a malformed releases API response', () => {
  assert.equal(getLatestBetaRelease([]), null);
  assert.equal(getLatestBetaRelease([release({tag_name: 'v1.18.0', prerelease: false})]), null);
  assert.equal(getLatestBetaRelease([null, {}]), null);
  for (const response of [null, undefined, {}, {message: 'API rate limit exceeded'}]) {
    assert.throws(() => getLatestBetaRelease(response), /Invalid releases response/);
  }
});

test('maps all five installers to the existing labels and analytics keys', () => {
  const installers = [
    asset('ResponsivelyApp-2.0.0-beta.0-arm64.dmg'),
    asset('ResponsivelyApp-2.0.0-beta.0.dmg'),
    asset('ResponsivelyApp-Setup-2.0.0-beta.0.exe'),
    asset('ResponsivelyApp-2.0.0-beta.0.AppImage'),
    asset('ResponsivelyApp-2.0.0-beta.0-arm64.AppImage'),
  ];
  assert.deepEqual(getReleaseDownloadLinks([...installers].reverse()), [
    {arch: 'mac-silicon', label: 'Mac (Apple Silicon)', href: installers[0].browser_download_url},
    {arch: 'mac-intel', label: 'Mac (Intel)', href: installers[1].browser_download_url},
    {arch: 'windows', label: 'Windows', href: installers[2].browser_download_url},
    {arch: 'linux', label: 'Linux (x64)', href: installers[3].browser_download_url},
    {arch: 'linux-arm64', label: 'Linux (arm64)', href: installers[4].browser_download_url},
  ]);
});

test('a partial release produces only its actual installers with no stale channel URLs', () => {
  const mac = asset('ResponsivelyApp-arm64.dmg');
  const windows = asset('ResponsivelyApp.exe');
  assert.equal(getReleaseDownloadLinks([mac, windows]).length, 2);
  assert.deepEqual(getReleaseDownloadLinks([windows]), [
    {arch: 'windows', label: 'Windows', href: windows.browser_download_url},
  ]);
  assert.deepEqual(getReleaseDownloadLinks([]), []);
});

test('ignores unsupported artifacts and unsafe links without mislabeling ARM installers', () => {
  assert.deepEqual(
    getReleaseDownloadLinks([
      asset('ResponsivelyApp-armv7l.AppImage'),
      asset('ResponsivelyApp-arm64.zip'),
      asset('latest.yml'),
      asset('ResponsivelyApp.exe.blockmap'),
      {name: 'invalid.exe', browser_download_url: 'invalid'},
      {name: 'unsafe.dmg', browser_download_url: 'javascript:alert(1)'},
    ]),
    []
  );
});
