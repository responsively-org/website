import Head from 'next/head';
import Link from 'next/link';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';

export default function Sponsor() {
  return (
    <>
      <Head>
        <title>Support Responsively App</title>
      </Head>
      <Header />
      Sponsorship
      <Footer />
    </>
  );
}
