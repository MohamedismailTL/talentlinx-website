// Example.tsx
import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton.tsx';


export default function Example({ cta }: any) {
	const [isVisible, setIsVisible] = useState(false);
	const { headline, subtitle } = cta.frontmatter;

	useEffect(() => {
		// Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100); // 100ms Verzögerung

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-br from-brand-aqua-800 to-brand-aqua-900">
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					{/* Überschrift */}
					<h2
						className={`text-balance text-4xl lg:text-6xl font-semibold tracking-tight text-white 
                        transform transition-opacity transition-transform duration-700 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
						style={{ transitionDelay: '200ms' }} // Verzögerung für die Überschrift
					>
						{headline}
					</h2>

					{/* Absatz */}
					<p
						className={`mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300 
                        transform transition-opacity transition-transform duration-700 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
						style={{ transitionDelay: '400ms' }} // Verzögerung für den Absatz
					>
						{subtitle}
					</p>

					{/* CTA-Button-Bereich */}
					<div
						className={`mt-10 flex items-center justify-center gap-x-6 
                        transform transition-opacity transition-transform duration-700 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
						style={{ transitionDelay: '600ms' }} // Verzögerung für den CTA-Button
					>
						<CTAButton />
					</div>
				</div>
			</div>
		</div>
	);
}
