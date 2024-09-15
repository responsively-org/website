import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Head from 'next/head';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { BlurBG } from '@/components/BlurBG';
import { useEffect, useState } from 'react';
import allDevicesSideBySide from '@/images/screenshots/all-devices-side-by-side.png';
import Image from 'next/image';
import { SponsorsAndContributors } from '@/components/SponsorsAndContributors';
import { DownloadLinks } from '@/components/DownloadLinks';
import { Spinner } from '@/components/Spinner';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function Download() {
  const [version, setVersion] = useState('');
  const [releaseTs, setReleaseTs] = useState<number>(1690638240);
  const [assets, setAssets] = useState<null | any[]>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
    const fetchAssets = () => {
      fetch('https://api.github.com/repos/responsively-org/responsively-app-releases/releases/latest')
        .then(res => res.json())
        .then(data => {
          setAssets(data.assets);
          setVersion(data.tag_name);
          setReleaseTs(new Date(data.published_at).getTime());
        })
        .catch(err => {
          console.error('Error getting assets', err);
        });
    };

    if (!assets) {
      fetchAssets();
    }
  }, [assets]);

  if (!isClient) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

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
          <DownloadLinks assets={assets} />
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
