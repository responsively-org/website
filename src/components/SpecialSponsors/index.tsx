import logoBairesDev from '@/images/logos/bairesdev.svg';
import logoGitHub from '@/images/logos/github.png';
import Image from 'next/image';
import Link from 'next/link';
import {Icon} from '@iconify/react';
import {NavLink} from '../NavLink';

export const SpecialSponsors = () => {
  return (
    <div>
      <p className="font-display text-base text-slate-900">Supported by these amazing sponsors</p>
      <ul
        role="list"
        className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {[
          [
            {
              name: 'GitHub',
              logo: logoGitHub,
              url: 'https://accelerator.github.com/#:~:text=responsively%2Dorg/responsively%2Dapp',
            },
          ],
          [
            {
              name: 'Baires Dev',
              logo: logoBairesDev,
              url: 'https://www.bairesdev.com/?ref=Responsively',
            },
          ],
        ].map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map(company => (
                <li key={company.name} className="flex rounded">
                  <Link href={company.url} target="_blank">
                    <Image src={company.logo} alt={company.name} unoptimized width={224} />
                  </Link>
                </li>
              ))}
              {groupIndex === 1 && (
                <NavLink href="/sponsor">
                  <li className="flex h-16 items-center gap-2 rounded-md font-medium text-gray-500 hover:text-gray-800">
                    <Icon icon="ion:shapes" className="" fontSize={36} />
                    See your logo here
                  </li>
                </NavLink>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
