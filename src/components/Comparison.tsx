// Comparison.tsx
import React, { useState, useEffect } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import CTAButton from './CTAButton';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Comparison({ comparison, metadata }: any) {
    const { title, boxes } = comparison.frontmatter;
    const boxOne = boxes[0];
    const boxTwo = boxes[1];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            {/* Überschrift-Bereich */}
            <div className="mx-auto max-w-4xl">
                <h2
                    className={classNames(
                        // Auf kleineren Screens text-3xl, ab sm -> text-5xl
                        // Auf Mobile linksbündig, ab lg zentriert
                        'mt-2 text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900',
                        'text-left lg:text-center',
                        'transform transition-opacity transition-transform duration-700',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}
                    style={{ transitionDelay: '200ms' }}
                >
                    {title}
                </h2>
            </div>

            {/* Zwei Boxen nebeneinander */}
            <div
                className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6
                   sm:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8"
            >
                {/* Box 1: Andere Recruiter */}
                <div
                    className={classNames(
                        'bg-gray-100 text-gray-900 ring-1 ring-gray-200',
                        'rounded-3xl p-8 sm:p-10 transform transition-opacity transition-transform duration-700'
                    )}
                    style={{ transitionDelay: '400ms' }}
                >
                    {/* h3 auf Mobile kleiner (2xl), ab sm -> 3xl */}
                    <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                        {boxOne.box_title}
                    </h3>
                    <ul className="mt-8 space-y-6 text-sm sm:mt-10 text-gray-700">
                        {boxOne.bulletpoints.map(({ bullet_title, bullet_text }: any) => (
                            <li key={bullet_title} className="flex gap-x-3">
                                {/* Icon */}
                                <span className="flex-none flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                  <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
                </span>
                                {/* Heading + Subtitle */}
                                <div>
                                    <h4 className="text-base font-semibold">{bullet_title}</h4>
                                    <p className="text-sm mt-1">{bullet_text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Box 2: TalentLinx */}
                <div
                    className={classNames(
                        'relative bg-gradient-to-br from-brand-primary-600 to-brand-primary-500 text-white shadow-2xl',
                        'rounded-3xl p-8 sm:p-10 transform transition-opacity transition-transform duration-700'
                    )}
                    style={{ transitionDelay: '600ms' }}
                >
                    {/* h3 auf Mobile kleiner (2xl), ab sm -> 3xl */}
                    <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                        {boxTwo.box_title}
                    </h3>
                    <ul className="mt-8 space-y-6 text-sm sm:mt-10 text-gray-300">
                        {boxTwo.bulletpoints.map(({ bullet_title, bullet_text }: any) => (
                            <li key={bullet_title} className="flex gap-x-3">
                                {/* Icon */}
                                <span className="flex-none flex h-6 w-6 items-center justify-center rounded-full bg-brand-aqua-600">
                  <CheckIcon aria-hidden="true" className="h-5 w-5 text-white" />
                </span>
                                {/* Heading + Subtitle */}
                                <div>
                                    <h4 className="text-base font-semibold">{bullet_title}</h4>
                                    <p className="text-sm mt-1">{bullet_text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA Button (bleibt zentriert auf allen Screens) */}
            <div className="flex justify-center mt-10">
                <CTAButton link={metadata.frontmatter.ctalink} />
            </div>
        </div>
    );
}
