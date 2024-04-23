import Head from 'next/head';
import { usePlausible } from 'next-plausible';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { BlurBG } from '@/components/BlurBG';
import { SponsorsAndContributors } from '@/components/SponsorsAndContributors';

import GitHubLogo from '@/images/logos/github-white.png';
import OpenCollectiveLogo from '@/images/logos/open-collective.png';

export default function Sponsor() {
  const plausible = usePlausible();
  return (
    <>
      <Head>
        <title>Support Responsively App</title>
      </Head>

      <Header />
      <BlurBG bgColor="none" bubbleType="2" />
      <Container className="relative mb-20 text-justify">
        <h1 className="my-4 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Become a Sponsor
        </h1>
        <p className="mt-4 text-base tracking-tight text-gray-500">
          Being a free and open-source project that is supported by the community, your sponsorship
          is critical to our mission to keep the app free and accessible to everyone. Sponsoring is
          a great way to show your support for the open-source community and to help us maintain and
          improve our app.
        </p>
        <p className="mt-4 text-base tracking-tight text-gray-500">
          Sponsorships can be done through the following ways:
        </p>
        <div className="my-8 flex flex-wrap w-full justify-center gap-4">
          <Link
            className='flex w-96 sm:w-1/3 md:w-1/4 h-16 bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl'
            href="https://github.com/sponsors/responsively-org"
          >
            <Image
              className='p-2'
              src={GitHubLogo}
              alt="GitHub Sponsors"
              width={64}
              height={64}
            />
            <Button
              className='bg-transparent hover:bg-transparent active:bg-transparent'
              onClick={() => plausible('sponsorClick', { props: { platform: 'github' } })}
            >
              GitHub Sponsors
            </Button>
          </Link>

          <Link
            className='flex w-96 sm:w-1/3 md:w-1/4 h-16 bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl'
            href="https://opencollective.com/responsively"
          >
            <Image
              className='p-2'
              src={OpenCollectiveLogo}
              alt="GitHub Sponsors"
              width={64}
              height={64}
            />
            <Button
              className='bg-transparent hover:bg-transparent active:bg-transparent'
              onClick={() => plausible('sponsorClick', { props: { platform: 'github' } })}
            >
              Open Collective
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-base tracking-tight text-gray-500">
          Both recurring and one-time sponsorships are accepted. Recurring sponsorships are
          preferred as they help us cover our ongoing costs and plan for the future. If you have any
          questions about sponsoring Responsively App, please contact us at p.manoj.vivek@gmail.com
        </p>
        <h2 className="my-4 font-display text-3xl tracking-tight md:text-3xl">Business Sponsors</h2>
        <p className="mt-4 text-base tracking-tight text-gray-500">
          Sponsoring Responsively App is a great way to enhance the reputation of your brand and
          showcase your commitment to open-source software development. Your support will help us
          deliver our mission and achieve our goals, which in turn will enhance your brand
          reputation and create positive associations with your company.
          <br />
          <br />
          By sponsoring Responsively App, you will put yourselves in front of a community of top
          talent in the open-source software development space. You can leverage this community to
          gain new talent, collaborate with other sponsors, and build long-term relationships with
          developers who share your values.
          <br />
          <br />
          If you're building a product or service that is relevant to the web development community,
          sponsoring Responsively App is a great way to increase your visibility through the badges
          on our website. Your sponsorship will help you reach a wider audience and generate more
          leads for your company.
        </p>
        <h2 className="my-4 font-display text-3xl tracking-tight md:text-3xl">
          Individual Sponsors
        </h2>
        <p className="mt-4 text-base tracking-tight text-gray-500">
          We're grateful for the support of the developers community in a lot of ways and We
          understand that individual contributions come in different sizes and forms, so whether you
          are able to offer a small or large amount, every bit of support counts. We appreciate your
          consideration of this request, and we thank you for being a valued member of our
          community.
          <br />
          <br />
          We know it's a big ask, but if you work for a company that uses and benefits from
          Responsively App, please consider asking your employer to sponsor Responsively App. We
          understand that companies have budgets and financial constraints, but we would greatly
          appreciate your efforts in spreading the word about our project and the benefits it
          provides.
          <br />
          <br />
          Besides sponsoring, you can also contribute to the project by submitting bug reports,
          feature requests, and pull requests. You can also help us spread the word about
          Responsively App by sharing it with your friends and colleagues.
        </p>
        <h2 className="my-4 font-display text-3xl tracking-tight md:text-3xl">Partnership</h2>
        <p className="mt-4 text-base tracking-tight text-gray-500">
          If you're interested in exploring partnership opportunities with us, please don't hesitate
          to reach out to us at p.manoj.vivek@gmail.com. We'd love to hear from you and discuss how
          we can work together to achieve mutual success.
          <br />
          <br />
          Thank you again for considering sponsoring Responsively App. Your support will help us
          continue to innovate and improve our app, and make a meaningful contribution to the
          open-source software development community.
        </p>
      </Container>
      <SponsorsAndContributors />
      <Footer />
    </>
  );
}
