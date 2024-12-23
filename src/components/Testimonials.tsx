import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';


export default function Example({ testimonials }: any) {
	// Debug: Konsolenausgabe, um die Daten zu prüfen
	console.log(testimonials);

	// Daten aus dem Frontmatter extrahieren
	const headline = testimonials.frontmatter.headline;
	const testimonial_boxes = testimonials.frontmatter.testimonial_boxes;

	// State für Animation
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Überschrift und Untertitel */}
				<div className="mx-auto max-w-2xl text-center">
					{/* Überschrift */}
					<p
						className={`mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl 
              transform transition-opacity transition-transform duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
						style={{ transitionDelay: '400ms' }}
					>
						{headline}
					</p>

					{/* Zentrierter Button mit mehr Abstand nach oben */}
					<div className="flex justify-center mt-8">
						<CTAButton />
					</div>
				</div>

				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					{/*
            "columns-2" erstellt ein Multi-Column-Layout mit 2 Spalten.
            "gap-8" sorgt für horizontalen Abstand zwischen den Spalten.

            Jede Box "dockt" unter der jeweiligen Box in der eigenen Spalte an
            (und nicht in einer gemeinsamen Zeile wie bei Grid).
          */}
					<div className="columns-2 gap-8">
						{testimonial_boxes.map((testimonial: any, index: any) => (
							<div
								key={index}
								className={`
                  mb-8
                  break-inside-avoid 
                  transform transition-opacity transition-transform duration-700 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
								style={{ transitionDelay: `${600 + index * 200}ms` }}
							>
								<figure className="rounded-xl bg-gray-50 p-8 text-sm shadow-md">
									<blockquote
										className="text-lg text-gray-800 italic leading-relaxed"
									>
										<p>{testimonial.testimonial}</p>
									</blockquote>
									<figcaption className="mt-6">
										<div className="font-bold text-gray-900">
											{testimonial.person}
										</div>
										<div className="text-gray-600">{testimonial.job_title}</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
