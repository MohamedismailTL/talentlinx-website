import { useState, useEffect } from 'react';

export default function Example({ technologies, children }: any) {
	const { headline, text } = technologies.frontmatter;
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100); // 100ms Verzögerung

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div
					className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
				>
					{/* Bild auf der linken Seite (mobile: zweite Position) */}
					<div
						className={`relative overflow-hidden rounded-2xl shadow-lg lg:max-w-lg transform transition-opacity transition-transform duration-700 order-2 lg:order-1 ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 -translate-x-4'
						}`}
						style={{ transitionDelay: '200ms' }} // Verzögerung für das Bild
					>
						{children}
					</div>

					{/* Inhalt auf der rechten Seite (mobile: erste Position) */}
					<div
						className={`transform transition-opacity transition-transform duration-700 order-1 lg:order-2 ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 translate-x-4'
						}`}
						style={{ transitionDelay: '400ms' }} // Verzögerung für den Inhalt
					>
						<div className="text-base/7 text-gray-700 lg:max-w-lg">
							<h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								{headline}
							</h2>
							<div className="max-w-xl">
								<p className="mt-6 text-gray-600">
									{text}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
