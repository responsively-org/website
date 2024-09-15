import { usePlausible } from 'next-plausible';
import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner';

export const DownloadLinks = ({ assets }: { assets: any[] | null }) => {
  const plausible = usePlausible();
  const [macURL, setMacURL] = useState('');
  const [macIntelURL, setMacIntelURL] = useState('');
  const [winURL, setWinURL] = useState('');
  const [linuxURL, setLinuxURL] = useState('');
  const [linuxArm64URL, setLinuxArm64URL] = useState('');

  useEffect(() => {
    if (assets) {
      const macArm64 = assets.find((asset: any) => asset.name.endsWith('-arm64.dmg'));
      const macIntel = assets.find(
        (asset: any) => asset.name.endsWith('.dmg') && !asset.name.endsWith('-arm64.dmg')
      );
      const win = assets.find((asset: any) => asset.name.endsWith('.exe'));
      const linux = assets.find(
        (asset: any) => asset.name.endsWith('.AppImage') && asset.name.indexOf('arm') === -1
      );
      const linuxArm64 = assets.find(
        (asset: any) => asset.name.endsWith('.AppImage') && asset.name.indexOf('arm') !== -1
      );

      setMacURL(macArm64.browser_download_url);
      setMacIntelURL(macIntel.browser_download_url);
      setWinURL(win.browser_download_url);
      setLinuxURL(linux.browser_download_url);
      setLinuxArm64URL(linuxArm64.browser_download_url);
    }
  }, [assets]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Button
        href={macURL}
        onClick={() => plausible('appDownload', { props: { arch: 'mac-silicon' } })}
      >
        {macURL ? "Mac (Apple Silicon)" : <Spinner />}
      </Button>
      <Button
        href={macIntelURL}
        onClick={() => plausible('appDownload', { props: { arch: 'mac-intel' } })}
      >
        {macIntelURL ? "Mac (Intel)" : <Spinner />}
      </Button>
      <Button
        href={winURL}
        onClick={() => plausible('appDownload', { props: { arch: 'windows' } })}
      >
        {winURL ? "Windows" : <Spinner />}
      </Button>
      <Button
        href={linuxURL}
        onClick={() => plausible('appDownload', { props: { arch: 'linux' } })}
      >
        {linuxURL ? "Linux (x64)" : <Spinner />}
      </Button>
      <Button
        href={linuxArm64URL}
        onClick={() => plausible('appDownload', { props: { arch: 'linux-arm64' } })}
      >
        {linuxArm64URL ? "Linux (arm64)" : <Spinner />}
      </Button>
    </div>
  )
}