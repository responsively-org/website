import Head from 'next/head';
import Link from 'next/link';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';

export default function Download() {
  return (
    <>
      <Head>
        <title>Download | Responsively App</title>
      </Head>
      <Header />
      Download
      <Footer />
    </>
  );
}
