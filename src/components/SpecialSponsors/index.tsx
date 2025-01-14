import logoSyncfusion from '@/images/logos/syncfusion.png';
import logoBrowserStack from '@/images/logos/browserStack.svg';
import logoGitHub from '@/images/logos/github.png';
import Image from 'next/image';
import Link from 'next/link';
import {Icon} from '@iconify/react';
import {NavLink} from '../NavLink';

const sponsors = [
  [
    {
      name: 'GitHub',
      logo: logoGitHub,
      url: 'https://accelerator.github.com/#:~:text=responsively%2Dorg/responsively%2Dapp',
      width: 224,
    },
  ],
  [
    {
      name: 'Syncfusion',
      logo: logoSyncfusion,
      url: 'https://www.syncfusion.com/?utm_source=responsivelyapp&utm_medium=cpc&utm_campaign=responsivelyapp_esee_ban',
      width: 224,
    },
  ],
  // [
  //   {
  //     name: 'BrowserStack',
  //     logo: logoBrowserStack,
  //     url: 'https://www.browserstack.com/?utm_source=responsively&utm_medium=partnered&ref=responsively_browser-source',
  //     width: 224,
  //   },
  // ],
];

export const SpecialSponsors = () => {
  return (
    <div>
      <p className="font-display text-base text-slate-900">Supported by these amazing sponsors</p>
      <ul
        role="list"
        className="mt-8 flex flex-col items-center justify-center gap-8 sm:gap-x-0 sm:gap-y-10 lg:flex-row xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {sponsors.map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:gap-x-12 sm:gap-y-0 md:flex-row"
            >
              {group.map(company => (
                <li key={company.name} className="flex rounded">
                  <Link href={company.url} target="_blank" aria-label={`Visit ${company.name}`}>
                    <Image
                      src={company.logo}
                      alt={company.name}
                      unoptimized
                      width={company.width}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <NavLink href="/sponsor">
            <div className="flex h-16 items-center gap-2 rounded-md font-medium text-gray-500 hover:text-gray-800">
              <Icon icon="ion:shapes" className="" fontSize={36} aria-label="Sponsor Us" />
              See your logo here
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
