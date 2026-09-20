import {Tab} from '@headlessui/react';
import clsx from 'clsx';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Container} from '@/components/Container';
import {BlurBG} from '@/components/BlurBG';
import {SponsorsAndContributors} from '@/components/SponsorsAndContributors';
import {DownloadLinks} from '@/components/DownloadLinks';
import {Spinner} from '@/components/Spinner';
import {DownloadRelease, getLatestBetaRelease, parseDownloadRelease} from '@/utils/releases';
import allDevicesSideBySide from '@/images/screenshots/all-devices-side-by-side.png';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');
const RELEASES_URL = 'https://github.com/responsively-org/responsively-app-releases/releases';
const RELEASES_API =
  'https://api.github.com/repos/responsively-org/responsively-app-releases/releases';

type ReleaseChannel = 'stable' | 'beta';
type ReleaseState =
  | {status: 'loading'}
  | {status: 'ready'; release: DownloadRelease | null}
  | {status: 'error'};

function useDownloadRelease(channel: ReleaseChannel): ReleaseState {
  const [state, setState] = useState<ReleaseState>({status: 'loading'});

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 15000);
    const url = channel === 'stable' ? `${RELEASES_API}/latest` : `${RELEASES_API}?per_page=30`;

    fetch(url, {signal: controller.signal})
      .then(async response => {
        if (!response.ok) throw new Error(`Release request failed: ${response.status}`);
        const data: unknown = await response.json();
        const release =
          channel === 'beta' ? getLatestBetaRelease(data) : parseDownloadRelease(data);
        if (channel === 'stable' && (!release || release.draft || release.prerelease)) {
          throw new Error('Stable release unavailable');
        }
        if (active) setState({status: 'ready', release});
      })
      .catch(() => {
        if (active) setState({status: 'error'});
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [channel]);

  return state;
}

function ReleaseDownloads({state, channel}: {state: ReleaseState; channel: ReleaseChannel}) {
  if (state.status === 'loading') {
    return (
      <div
        className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600"
        role="status"
      >
        <Spinner />
        <span>Loading {channel} downloads…</span>
      </div>
    );
  }

  if (state.status === 'error') {
    return (
      <div className="mt-6 text-center" role="status">
        <p className="mb-3 text-sm text-slate-600">
          We couldn’t load the {channel} downloads right now.
        </p>
        <Button
          variant="outline"
          href={channel === 'stable' ? `${RELEASES_URL}/latest` : RELEASES_URL}
        >
          View {channel === 'stable' ? 'stable downloads' : 'releases'} on GitHub
        </Button>
      </div>
    );
  }

  if (!state.release) {
    return (
      <p className="mt-6 text-sm text-slate-600">
        There isn’t a beta available right now. Choose the Stable tab to download the current
        release.
      </p>
    );
  }

  const {release} = state;
  return (
    <>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
        <span className="font-semibold text-slate-900">{release.tag_name}</span>
        <span className="text-slate-600">
          Released {timeAgo.format(Date.parse(release.published_at))}
        </span>
        <a
          href={release.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
        >
          Release notes
        </a>
      </div>
      <DownloadLinks assets={release.assets} channel={channel} version={release.tag_name} />
      {!release.assets.length && (
        <a href={release.html_url} className="mt-3 inline-block text-sm text-emerald-700 underline">
          View this release on GitHub
        </a>
      )}
    </>
  );
}

export default function Download() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!router.isReady) return;
    const syncChannel = () => setSelectedIndex(window.location.hash === '#beta' ? 1 : 0);
    syncChannel();
    window.addEventListener('hashchange', syncChannel);
    return () => window.removeEventListener('hashchange', syncChannel);
  }, [router.isReady, router.asPath]);

  const selectChannel = (index: number) => {
    setSelectedIndex(index);
    void router.push(
      {pathname: router.pathname, query: router.query, hash: index === 1 ? 'beta' : 'stable'},
      undefined,
      {shallow: true, scroll: false}
    );
  };

  const stable = useDownloadRelease('stable');
  const beta = useDownloadRelease('beta');

  return (
    <div className="h-fit">
      <Head>
        <title>Download | Responsively App</title>
        <meta
          name="description"
          content="Download Responsively App for macOS, Windows, and Linux. Choose the stable release or try the latest beta."
        />
      </Head>
      <Header />
      <BlurBG bgColor="none" bubbleType="2" />
      <Container className="relative z-10 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="my-4 text-center font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Responsively App Downloads
          </h1>
          <p className="max-w-xl text-center text-lg tracking-tight text-slate-700">
            Choose the stable release for everyday use, or try the beta to explore what’s next.
          </p>
          <Tab.Group
            as="div"
            selectedIndex={selectedIndex}
            onChange={selectChannel}
            className="mt-8 w-full max-w-4xl"
          >
            <Tab.List
              aria-label="Release channel"
              className="mx-auto flex w-fit rounded-full bg-slate-900/5 p-1"
            >
              {['Stable', 'Beta'].map(channel => (
                <Tab
                  key={channel}
                  className={({selected}) =>
                    clsx(
                      'rounded-full px-8 py-2.5 text-sm font-semibold outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700',
                      selected
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    )
                  }
                >
                  {channel}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-6 rounded-3xl border border-slate-200 bg-white/70 shadow-sm">
              <Tab.Panel className="px-5 py-8 text-center outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:px-8">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <h2 className="font-display text-2xl tracking-tight text-slate-900">
                    Stable release
                  </h2>
                  <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700">
                    Recommended
                  </span>
                </div>
                <p className="mx-auto mt-3 max-w-xl text-slate-600">
                  The current stable release, recommended for everyday use.
                </p>
                <ReleaseDownloads state={stable} channel="stable" />
              </Tab.Panel>
              <Tab.Panel className="px-5 py-8 text-center outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:px-8">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <h2 className="font-display text-2xl tracking-tight text-slate-900">
                    Try the beta
                  </h2>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                    Early access
                  </span>
                </div>
                <p className="mx-auto mt-3 max-w-xl text-slate-600">
                  Get an early look at the latest features and help shape the next release. Beta
                  builds may have rough edges.
                </p>
                <ReleaseDownloads state={beta} channel="beta" />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <div className="my-8">
            <Image
              className="w-full rounded shadow-xl"
              src={allDevicesSideBySide}
              alt="Responsively showing a website across multiple device previews"
              priority
              sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-300" />
          </div>
        </div>
        <h2 className="my-8 text-center font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Thanks to our sponsors and contributors!
        </h2>
        <SponsorsAndContributors />
      </Container>
      <Footer />
    </div>
  );
}
