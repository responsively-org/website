import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';
import { Icon } from '@iconify/react';
import { Button } from './Button';

export function Footer() {
  function goToTop(){
    let rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <footer className="relative z-10 bg-slate-50">
      <Container>
        <div className="py-16">
          <Link href="/" aria-label="Home Page">
            <Logo className="mx-auto h-10 w-auto" />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-wrap justify-center gap-x-6">
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#testimonials">Testimonials</NavLink>
              <NavLink href="/download">Download</NavLink>
              <NavLink href="/sponsor">Sponsor</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/join-discord">Join Discord</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 md:flex-row-reverse md:justify-between">
          <div className="flex items-center gap-x-6">
            <Link
              href="https://twitter.com/ResponsivelyApp"
              className="group"
              aria-label="Responsively App on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="10px"
                fill="currentColor"
                className="h-5 w-5 fill-slate-500 group-hover:fill-slate-700"
                viewBox="0 0 16 16"
              >
                <path d="M12.6 .75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601 .75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/responsively-org/responsively-app"
              className="group"
              aria-label="Responsively App on GitHub"
            >
              <svg aria-hidden="true" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
            <Link href="/join-discord" className="group" aria-label="Join Responsively App Discord">
              <Icon
                icon="akar-icons:discord-fill"
                className="h-6 w-6 text-slate-500 group-hover:text-slate-700"
              />
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Responsively App. All rights reserved and
            subject to the <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
            <Link href="/terms-and-conditions">Terms and Conditions</Link>.
          </p>
        </div>
      </Container>
      <Button className='fixed right-2 bottom-2 goToTop'  color="green" style={{width: '40px', height: '40px', padding: '4px 8px'}} onClick={goToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width={'40px'} height={'40px'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </Button>
    </footer>
  );
}
