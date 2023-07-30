import 'focus-visible';
import {Analytics} from '@vercel/analytics/react';

import '@/styles/tailwind.css';
import '@/styles/carbon-ads.css';

export default function App({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
