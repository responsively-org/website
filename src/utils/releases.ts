export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface DownloadRelease {
  tag_name: string;
  html_url: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets: ReleaseAsset[];
}

export interface ReleaseDownloadLink {
  arch: 'mac-silicon' | 'mac-intel' | 'windows' | 'linux' | 'linux-arm64';
  label: string;
  href: string;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isHttpsURL = (value: unknown): value is string => {
  if (typeof value !== 'string') return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};

const isReleaseAsset = (value: unknown): value is ReleaseAsset =>
  isRecord(value) &&
  typeof value.name === 'string' &&
  value.name.trim().length > 0 &&
  isHttpsURL(value.browser_download_url);

export function parseDownloadRelease(value: unknown): DownloadRelease | null {
  if (
    !isRecord(value) ||
    typeof value.tag_name !== 'string' ||
    value.tag_name.trim().length === 0 ||
    !isHttpsURL(value.html_url) ||
    typeof value.published_at !== 'string' ||
    !Number.isFinite(Date.parse(value.published_at)) ||
    typeof value.prerelease !== 'boolean' ||
    typeof value.draft !== 'boolean' ||
    !Array.isArray(value.assets)
  ) {
    return null;
  }

  return {
    tag_name: value.tag_name,
    html_url: value.html_url,
    published_at: value.published_at,
    prerelease: value.prerelease,
    draft: value.draft,
    assets: value.assets.filter(isReleaseAsset).map(asset => ({
      name: asset.name,
      browser_download_url: asset.browser_download_url,
    })),
  };
}

const betaTag = /^v?\d+\.\d+\.\d+-beta(?:\.[0-9A-Za-z-]+)*(?:\+[0-9A-Za-z.-]+)?$/;

export function getLatestBetaRelease(value: unknown): DownloadRelease | null {
  if (!Array.isArray(value)) {
    throw new Error('Invalid releases response');
  }

  let latest: DownloadRelease | null = null;
  for (const entry of value) {
    const release = parseDownloadRelease(entry);
    if (!release || release.draft || !release.prerelease || !betaTag.test(release.tag_name)) {
      continue;
    }
    if (!latest || Date.parse(release.published_at) > Date.parse(latest.published_at)) {
      latest = release;
    }
  }
  return latest;
}

const platforms: Array<{
  arch: ReleaseDownloadLink['arch'];
  label: string;
  matches: (name: string) => boolean;
}> = [
  {
    arch: 'mac-silicon',
    label: 'Mac (Apple Silicon)',
    matches: name => name.endsWith('-arm64.dmg'),
  },
  {
    arch: 'mac-intel',
    label: 'Mac (Intel)',
    matches: name => name.endsWith('.dmg') && !name.endsWith('-arm64.dmg'),
  },
  {
    arch: 'windows',
    label: 'Windows',
    matches: name => name.endsWith('.exe'),
  },
  {
    arch: 'linux',
    label: 'Linux (x64)',
    matches: name => name.endsWith('.AppImage') && !name.toLowerCase().includes('arm'),
  },
  {
    arch: 'linux-arm64',
    label: 'Linux (arm64)',
    matches: name => name.endsWith('-arm64.AppImage'),
  },
];

export function getReleaseDownloadLinks(assets: readonly ReleaseAsset[]): ReleaseDownloadLink[] {
  const validAssets = assets.filter(isReleaseAsset);
  return platforms.flatMap(({arch, label, matches}) => {
    const asset = validAssets.find(candidate => matches(candidate.name));
    return asset ? [{arch, label, href: asset.browser_download_url}] : [];
  });
}
