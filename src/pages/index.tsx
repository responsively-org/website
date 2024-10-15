import Head from 'next/head';
import Image from 'next/image';

import backgroundSVG from '@/images/background-hero.svg';

import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="relative">
      <Image
        className="absolute top-0 w-full"
        src={backgroundSVG}
        alt=""
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        unoptimized
        priority
      />

      <Head>
        <title>Responsively App - A web developer's browser</title>
        <meta
          name="description"
          content="A dev-tool that aids faster and precise responsive web development."
        />
        <link rel="canonical" href="https://responsively.app/" />
      </Head>

      <main className="relative">
        <div className="relative">
          <div className="relative z-10">
            <Header />
            <Hero />
          </div>
        </div>
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
