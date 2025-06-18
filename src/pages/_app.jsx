import 'focus-visible';
import PlausibleProvider from 'next-plausible';
import Lenis from 'lenis'
import { useEffect } from 'react';

import '@/styles/tailwind.css';
import '@/styles/carbon-ads.css';
import '@/styles/lenis.css'

export default function App({Component, pageProps}) {

    useEffect(() => {
      // Initialize Lenis
        const lenis = new Lenis();
        let frame;
        // Use requestAnimationFrame to continuously update the scroll
        function raf(time) {
          lenis.raf(time);
          frame = requestAnimationFrame(raf);
        }   
        requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(frame); // Stop the animation loop
          lenis.destroy();
        };
    }, [])

  return (
    <PlausibleProvider domain="responsively.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
