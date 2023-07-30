import {Tab} from '@headlessui/react';
import clsx from 'clsx';

import {Container} from '@/components/Container';
import {Key} from '@/components/Key';
import {Icon} from '@iconify/react';

const features = [
  {
    name: 'One inspector for all devices',
    summary: 'Stay on top of your design with the Unified Inspector.',
    description: (
      <>
        The Unified Inspector allows you to inspect elements across all devices at once. Just press{' '}
        <Key>Cmd/Ctrl</Key> + <Key>I</Key> to activate it and hover over any element to see its
        details.
      </>
    ),
    video: 'https://responsively-org.github.io/responsively-app/assets/video/unified-inspector.mp4',
    icon: <Icon icon="ph:binoculars" fontSize={30} />,
  },
  {
    name: 'One Click Screenshots',
    summary: 'Take full page screenshots of all devices at once with a single click.',
    description:
      'You can also take screenshots of individual devices by clicking on the camera icon in the device toolbar. And a quick screenshot of the viewport too.',
    video: 'https://responsively-org.github.io/responsively-app/assets/video/screenshot.mp4',
    icon: <Icon icon="ph:camera" fontSize={30} />,
  },
  {
    name: 'Basic Browser features',
    summary: 'In addition to the above, you get all the basic browser features.',
    description:
      'You get all the basic browser features like cookie management, local storage, session storage, bookmarks, etc. You can also use the devtools as in any browser.',
    video: 'https://responsively-org.github.io/responsively-app/assets/video/other-features.mp4',
    icon: <Icon icon="ph:browser" fontSize={30} />,
  },
];

function Feature({feature, isActive, className, ...props}) {
  return (
    <div className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')} {...props}>
      <div className={clsx('w-9 rounded-lg', isActive ? 'text-emerald-600' : '')}>
        {feature.icon}
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-emerald-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">{feature.summary}</p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map(feature => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                name="media"
                sizes="52.75rem"
                className="w-full"
              >
                <source src={feature.video} />
              </video>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({selectedIndex}) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{transform: `translateX(-${selectedIndex * 100}%)`}}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <video autoPlay loop muted playsInline name="media" sizes="52.75rem">
                      <source src={feature.video} />
                    </video>
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Not to miss the Nifty Utilities
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Embrace the power of our Versatile Utility Collection to make your life easier.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
