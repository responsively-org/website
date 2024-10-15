import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import Link from 'next/link';
import React, {useState} from 'react';
import {ChevronUpIcon, ChevronDownIcon} from 'lucide-react';

const faqs = [
  [
    {
      question: 'Does Responsively App render the page with the same engine as the browser?',
      answer:
        'No, Responsively App is built on top of Electron and uses Chromium as its rendering engine.',
    },
    {
      question: 'Does Responsively App accurately render as real devices?',
      answer:
        'Responsively App tries to render pages as close as possible to real devices but it may not be 100% accurate.',
    },
    {
      question: 'Is Responsively App a good replacement for real devices?',
      answer:
        'No, Responsively App is not a replacement for real devices. It is a tool that renders pages in viewport sizes of various devices, but it does not emulate their behavior.',
    },
  ],
  [
    {
      question: 'Is Responsively App free?',
      answer:
        'Yes, Responsively App is free to use and open source. You can find the source code on GitHub.',
    },

    {
      question: 'How do I report a bug?',
      answer: (
        <>
          Please open an issue on our{' '}
          <a
            href="https://github.com/responsively-org/responsively-app/issues"
            className="underline"
          >
            GitHub repo
          </a>{' '}
          and we'll look into it.
        </>
      ),
    },
    {
      question: 'How do I request a feature?',
      answer: (
        <>
          Please open an issue on our{' '}
          <a
            href="https://github.com/responsively-org/responsively-app/issues"
            className="underline"
          >
            GitHub repo
          </a>{' '}
          explainng your need and we'll look into it.
        </>
      ),
    },
  ],
  [
    {
      question: 'How can I support Responsively App?',
      answer: (
        <>
          You can support in a lot of ways and we have details of in our{' '}
          <Link href="/sponsor" className="underline">
            Sponsorship
          </Link>{' '}
          page.
        </>
      ),
    },
    {
      question: 'How can I contribute to Responsively App?',
      answer: (
        <>
          Please checkout our{' '}
          <a
            href="https://github.com/responsively-org/responsively-app/issues"
            className="underline"
          >
            GitHub repo
          </a>{' '}
          for issues that needs help and give them a try.
        </>
      ),
    },
  ],
];

export function Faqs() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = index => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const flatFaqs = faqs.flat();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-title"
            className="mb-6 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-xl tracking-tight text-slate-700">
            If you can’t find what you’re looking for, please open an issue on our{' '}
            <a
              href="https://github.com/responsively-org/responsively-app"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
            .
          </p>
          <div className="space-y-6">
            {flatFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openQuestion === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
