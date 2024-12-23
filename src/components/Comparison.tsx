// Comparison.tsx
import React, { useState, useEffect } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import CTAButton from './CTAButton';

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Comparison({ comparison }: any) {
	const { title, boxes } = comparison.frontmatter;
	// Wir gehen hier davon aus, dass "boxes" zwei Einträge hat:
	// boxes[0] = Andere Recruiter
	// boxes[1] = TalentLinx (o. ä.)
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
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
					}}
					className="relative left-[calc(50%-11rem)] aspect-[1155/678]
                     w-[36.125rem] -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-brand-aquamarine-200
                     to-brand-aquamarine-300 opacity-30
                     sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>

			{/* Überschrift */}
			<div className="mx-auto max-w-4xl text-center">
				<h2
					className={classNames(
						'mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl',
						'transform transition-opacity transition-transform duration-700',
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
					)}
					style={{ transitionDelay: '200ms' }}
				>
					{title}
				</h2>
			</div>

			{/* CTA Button zentrieren + mehr Abstand nach oben */}
			<div className="flex justify-center mt-10">
				<CTAButton />
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
					<h3 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">
						{boxOne.box_title}
					</h3>
					<ul className="mt-8 space-y-6 text-sm sm:mt-10 text-gray-700">
						{boxOne.bulletpoints.map(({ bullet_title, bullet_text }: any) => (
							<li key={bullet_title} className="flex gap-x-3">
								{/* Icon */}
								<span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
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
					<h3 className="mt-4 text-5xl font-semibold tracking-tight text-white">
						{boxTwo.box_title}
					</h3>
					<ul className="mt-8 space-y-6 text-sm sm:mt-10 text-gray-300">
						{boxTwo.bulletpoints.map(({ bullet_title, bullet_text }: any) => (
							<li key={bullet_title} className="flex gap-x-3">
								{/* Icon */}
								<span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-aqua-600">
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
		</div>
	);
}
