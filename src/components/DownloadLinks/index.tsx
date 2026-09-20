import {Button} from '@/components/Button';
import {trackEvent} from '@/utils/analytics';
import {getReleaseDownloadLinks, ReleaseAsset} from '@/utils/releases';

type DownloadLinksProps = {
  assets: ReleaseAsset[];
  channel: 'stable' | 'beta';
  version: string;
};

export const DownloadLinks = ({assets, channel, version}: DownloadLinksProps) => {
  const downloads = getReleaseDownloadLinks(assets);

  if (!downloads.length) {
    return (
      <p className="mt-6 text-sm text-slate-600">
        Installers are not available for this release yet.
      </p>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {downloads.map(({arch, label, href}) => (
        <Button
          key={arch}
          href={href}
          color={channel === 'beta' ? 'green' : 'slate'}
          className={channel === 'beta' ? '!bg-emerald-700 hover:!bg-emerald-800' : ''}
          aria-label={`Download ${version} ${channel} for ${label}`}
          onClick={() => trackEvent('appDownload', {arch, channel, version})}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
