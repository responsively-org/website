import 'focus-visible';
import {Analytics} from '@vercel/analytics/react';
import {useRouter} from 'next/router';
import * as Fathom from 'fathom-client';

import '@/styles/tailwind.css';
import '@/styles/carbon-ads.css';

export default function App({Component, pageProps}) {

  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('VGCLYQAQ', {
      includedDomains: ['responsively.app'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);


  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
