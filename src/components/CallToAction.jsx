import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import {BlurBG} from './BlurBG';

// Responsively APP

export function CallToAction() {
  return (
    <section id="get-started-today" className="relative overflow-hidden py-32">
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <BlurBG />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Time to kick off your journey towards Web Development Mastery.
          </p>
          <Button href="/download" color="white" className="mt-10">
            Download Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
