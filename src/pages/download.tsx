import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {usePlausible} from 'next-plausible';
import Head from 'next/head';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Container} from '@/components/Container';
import {BlurBG} from '@/components/BlurBG';
import {useEffect, useState} from 'react';
import allDevicesSideBySide from '@/images/screenshots/all-devices-side-by-side.png';
import Image from 'next/image';
import {SponsorsAndContributors} from '@/components/SponsorsAndContributors';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function Download() {
  const plausible = usePlausible();
  const [macURL, setMacURL] = useState('');
  const [macIntelURL, setMacIntelURL] = useState('');
  const [winURL, setWinURL] = useState('');
  const [linuxURL, setLinuxURL] = useState('');
  const [version, setVersion] = useState('');
  const [releaseTs, setReleaseTs] = useState<number>(1690638240);

  useEffect(() => {
    fetch('https://api.github.com/repos/responsively-org/responsively-app-releases/releases/latest')
      .then(res => res.json())
      .then(data => {
        const macArm64 = data.assets.find((asset: any) => asset.name.endsWith('-arm64.dmg'));
        const macIntel = data.assets.find(
          (asset: any) => asset.name.endsWith('.dmg') && !asset.name.endsWith('-arm64.dmg')
        );
        const win = data.assets.find((asset: any) => asset.name.endsWith('.exe'));
        const linux = data.assets.find((asset: any) => asset.name.endsWith('.AppImage'));

        setMacURL(macArm64.browser_download_url);
        setMacIntelURL(macIntel.browser_download_url);
        setWinURL(win.browser_download_url);
        setLinuxURL(linux.browser_download_url);
        setVersion(data.tag_name);
        setReleaseTs(new Date(data.published_at).getTime());
      })
      .catch(err => {
        console.error('Error getting assets', err);
      });
  }, []);

  return (
    <div className="h-fit">
      <Head>
        <title>Download | Responsively App</title>
      </Head>
      <Header />
      <BlurBG bgColor="none" bubbleType="2" />
      <Container className="relative z-10 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="my-4 text-center font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Responsively App Downloads
          </h1>
          <p className="max-w-xl text-center text-xl tracking-tight text-slate-900">
            You are just one step away from unlocking a whole new level of web development speed.
            Embrace the final leap!
          </p>
          <p className="my-4">
            <Button
              variant="outline"
              href={`https://github.com/responsively-org/responsively-app/releases/tag/${version}`}
              target="_blank"
            >
              <div className="flex flex-col px-8">
                <span className="text-base">{version} - Changelog</span>
                <span className="text-xs">Released {timeAgo.format(releaseTs)}</span>
              </div>
            </Button>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              href={macURL}
              onClick={() => plausible('appDownload', {props: {arch: 'mac-silicon'}})}
            >
              Mac (Apple Silicon)
            </Button>
            <Button
              href={macIntelURL}
              onClick={() => plausible('appDownload', {props: {arch: 'mac-intel'}})}
            >
              Mac (Intel)
            </Button>
            <Button
              href={winURL}
              onClick={() => plausible('appDownload', {props: {arch: 'windows'}})}
            >
              Windows
            </Button>
            <Button
              href={linuxURL}
              onClick={() => plausible('appDownload', {props: {arch: 'linux'}})}
            >
              Linux
            </Button>
          </div>

          <div className="my-8">
            <Image
              className="w-full rounded shadow-xl"
              src={allDevicesSideBySide}
              alt=""
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
        <h1 className="my-8 mt-8 text-center font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Thanks to our sponsors and contributors!
        </h1>
        <SponsorsAndContributors />
      </Container>

      <Footer />
    </div>
  );
}
