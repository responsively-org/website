//imports
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import Link from 'next/link';
import { useState } from 'react';

// faqs
const faqs = [
    {
        question: 'Does Responsively App render the page with the same engine as the browser?',
        answer: 'No, Responsively App is built on top of Electron and uses Chromium as its rendering engine.',
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
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <>
            <section
                id='faq'
                aria-labelledby='faq-title'
                className='relative overflow-hidden flex flex-col items-center justify-center bg-slate-50 py-20 sm:py-32'
            >
                <Image
                    className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
                    src={backgroundImage}
                    alt=""
                    width={1558}
                    height={946}
                    unoptimized
                />
                <Container className='relative'>
                    <div 
                        id='faq-title'
                        className='flex flex-col'
                    >
                        {/* small screen */}
                        <div className='text-3xl font-display sm:hidden text-center'> 
                            FAQ
                        </div>
                        {/* Large screen */}
                        <div className='hidden sm:block font-display text-3xl sm:text-4xl text-center'>
                            Frequently Asked Questions
                        </div>
                        <div 
                            className='mt-1 sm:mt-4 text-md sm:text-lg tracking-tight text-slate-700 text-center'
                        >
                            If you can't find what you're looking for, please open an issue on our{' '}
                            <a
                            href="https://github.com/responsively-org/responsively-app"
                            target="_blank"
                            className="underline"
                            >
                            GitHub
                            </a>
                            .
                        </div>
                    </div>
                    <div className='mx-auto mt-16 grid max-w-xl divide-y divide-gray-300'>
                        {faqs.map((question, index) => {
                            return (
                                <div key={index} className='py-5'>
                                    <div className='group'>
                                        <div 
                                            className={`flex items-center justify-between cursor-pointer list-none
                                                ${openIndex === index ? `font-display` : ''} hover:font-diplay`}
                                            //Toggle on click
                                            onClick={() => toggleQuestion(index)}
                                        >
                                            <span className='text-md hover:font-display '>{question.question}</span>
                                            <span className={`transition ${openIndex === index ? 'rotate-180' : ''}`}>
                                                <svg fill="none" height="16" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        {openIndex === index && (
                                            <p className='animate-fadeIn mt-3 text-neutral-600'>
                                                {question.answer}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </>
    )
}