import 'focus-visible';
import PlausibleProvider from 'next-plausible';

import '@/styles/tailwind.css';
import '@/styles/carbon-ads.css';
import '@/styles/lenis.css'

export default function App({Component, pageProps}) {
  return (
    <PlausibleProvider domain="responsively.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
