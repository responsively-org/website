import Head from 'next/head';

import backgroundImage from '@/images/background-faqs.jpg';
import {CallToAction} from '@/components/CallToAction';
import {Faqs} from '@/components/Faqs';
import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import {Hero} from '@/components/Hero';
import {Pricing} from '@/components/Pricing';
import {PrimaryFeatures} from '@/components/PrimaryFeatures';
import {SecondaryFeatures} from '@/components/SecondaryFeatures';
import {Testimonials} from '@/components/Testimonials';
import Image from 'next/image';
import {BlurBG} from '@/components/BlurBG';

export default function Home() {
  return (
    <div className="relative">
      {/* <Image
        className="absolute top-0 max-w-none -translate-y-1/4"
        src={backgroundImage}
        alt=""
        style={{objectFit: 'cover', objectPosition: 'center'}}
        unoptimized
      /> */}
      <BlurBG bgColor="none" bubbleType="2" />
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main className="relative">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}
