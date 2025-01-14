import React, {useEffect, useState} from 'react';
import missingContributors from './missing-contributors.json';
import {Container} from '../Container';

const fixContributors = list => {
  if (list == null) return [];

  const mrfelfel = list.find(x => x.login === 'mjyahaghi');
  if (mrfelfel != null) {
    mrfelfel.login = 'mrfelfel';
    mrfelfel.avatar_url = 'https://avatars3.githubusercontent.com/u/19575588?v=4&s=96';
  }

  return list.concat(
    missingContributors.filter(mc => list.find(x => x.login === mc.login) == null)
  );
};

export const SponsorsAndContributors = () => {
  const [contributors, setContributors] = useState([]);
  const [allSponsors, setAllSponsors] = useState([]);

  useEffect(() => {
    (async () => {
      const contributors = JSON.parse(
        await fetch(
          'https://api.github.com/repos/responsively-org/responsively-app/contributors?per_page=100'
        ).then(response => response.text())
      ).filter(contributor => contributor.type === 'User');
      setContributors(fixContributors(contributors));
    })();
  }, []);

  useEffect(() => {
    // Get Sponsors from GitHub API and Open Collective API and merge them and sort them by amount donated (descending)
    // and then by name (ascending) and then set the state allSponsors.
    (async () => {
      const [sponsors, githubSponsors] = await Promise.all([
        fetch('https://opencollective.com/responsively/members.json').then(response =>
          response.json()
        ),
        fetch('https://ghs.vercel.app/v3/sponsors/responsively-org')
          .then(response => response.json())
          .then(response => [...response.sponsors.current, ...response.sponsors.past]),
      ]);

      const allSponsors = sponsors
        .flat()
        .filter(sponsor => sponsor.role === 'BACKER' && sponsor.name !== 'Guest')
        .map(sponsor => ({
          profile: sponsor.profile,
          name: sponsor.name,
          image:
            sponsor.image ?? `${sponsor.profile.replace('https://', 'https://images.')}/avatar.png`,
          amount: sponsor.totalAmountDonated,
          lastDonation: new Date(sponsor.lastTransactionAt).getTime(),
        }))
        .sort((a, b) => {
          if (a.lastDonation !== b.lastDonation) {
            return b.lastDonation - a.lastDonation;
          }
          if (a.amount !== b.amount) {
            return b.amount - a.amount;
          }
          return a.name.localeCompare(b.name);
        });

      for (const sponsor of githubSponsors) {
        allSponsors.push({
          profile: `https://github.com/${sponsor.username}`,
          name: sponsor.username,
          image: sponsor.avatar,
          amount: 0,
          lastDonation: 0,
        });
      }
      setAllSponsors(allSponsors);
    })();
  }, []);

  if (!contributors.length) {
    return null;
  }

  return (
    <Container className="relative">
      <div className="text-center">
        <h3 className=" my-4 flex justify-center gap-2 font-display text-3xl tracking-tight md:text-3xl">
          Our Gold Sponsors
          <span role="img" aria-label="appreciation">
            🏆
          </span>
        </h3>
        <div className="my-8 flex flex-col items-center justify-center lg:flex-row">
          <a
            className="flex h-32 items-center rounded-xl p-5"
            target="__blank"
            rel="noreferrer"
            href="https://accelerator.github.com/#:~:text=responsively%2Dorg/responsively%2Dapp"
          >
            <img src="/assets/img/logos/github.png" alt="GitHub" width="264" />
          </a>
          <a
            className="flex h-32 items-center rounded-xl p-5"
            target="__blank"
            rel="noreferrer"
            href="https://www.syncfusion.com/?utm_source=responsivelyapp&utm_medium=cpc&utm_campaign=responsivelyapp_esee_ban"
          >
            <img src="/assets/img/logos/syncfusion.png" alt="Syncfusion" width="264" />
          </a>
          {/* <a
            className="flex h-32 items-center rounded-xl p-5"
            target="__blank"
            rel="noreferrer"
            href="https://www.browserstack.com/?utm_source=responsively&utm_medium=partnered&ref=responsively_browser-source"
          >
            <img src="/assets/img/logos/browserStack.svg" alt="BrowserStack" width="264" />
          </a> */}
          <a
            className="flex h-28 items-center rounded-xl bg-indigo-50 p-5"
            href="/sponsor/#become-a-sponsor"
          >
            See your company logo here!
          </a>
        </div>
      </div>
      <div className="justify-content-center text-center">
        <h3 className=" my-4 flex justify-center gap-2 font-display text-3xl tracking-tight md:text-3xl">
          All Sponsors
          <span role="img" aria-label="appreciation">
            ❤️
          </span>
        </h3>
        <div className="my-8 flex flex-wrap items-center justify-center gap-2">
          {allSponsors.map(sponsor => (
            <a
              key={sponsor.profile}
              href={sponsor.profile}
              title={sponsor.name}
              target="_blank"
              rel="noreferrer"
            >
              <img src={sponsor.image} alt={sponsor.name} className="h-12 w-12 rounded-full" />
            </a>
          ))}
        </div>
      </div>
      <div className="justify-content-center text-center">
        <h3 className=" my-4 flex justify-center gap-2 font-display text-3xl tracking-tight md:text-3xl">
          GitHub Contributors
          <span role="img" aria-label="appreciation">
            🫡
          </span>
        </h3>
        <div className="flex justify-center">
          <div className="my-8 flex flex-wrap items-center justify-center gap-2 md:w-9/12">
            {contributors?.map(contributor => (
              <a
                key={contributor.login}
                href={`https://github.com/${contributor.login}`}
                title={`${contributor.contributions} contribution${
                  contributor.contributions === 1 ? '' : 's'
                } from ${contributor.login}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${contributor.avatar_url}&s=96`}
                  alt={contributor.login}
                  className="h-12 w-12 rounded-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
