import { useState, useEffect } from 'react';
import CTAButton from './CTAButton.tsx';

export default function Example({ diagram, children }: any) {
	const [isVisible, setIsVisible] = useState(false);
	const { title, text } = diagram.frontmatter;

	useEffect(() => {
		// Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100); // 100ms Verzögerung

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					{/* Linke Seite */}
					<div
						className={`px-6 lg:px-0 lg:pr-4 lg:pt-4 transform transition-all duration-700 ${
							isVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-4'
						}`}
						style={{ transitionDelay: '200ms' }}
					>
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<h2
								className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl transform transition-all duration-700 ${
									isVisible
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-4'
								}`}
								style={{ transitionDelay: '200ms' }}
							>
								{title}
							</h2>
							<p
								className={`my-6 text-lg text-gray-600 transform transition-all duration-700 ${
									isVisible
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-4'
								}`}
								style={{ transitionDelay: '400ms' }}
							>
								{text}
							</p>
							{/* CTAButton kann ohne Animation verwendet werden oder optional animiert werden */}
							<CTAButton />
						</div>
					</div>
					{/* Rechte Seite */}
					<div
						className={`sm:px-6 lg:px-0 transform transition-all duration-700 ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 translate-x-4'
						}`}
						style={{ transitionDelay: '400ms' }}
					>
						<div className="-mx-4 sm:mx-0">
							<div className="mx-auto max-w-2xl sm:max-w-full">
								<div
									className="w-full rounded-none md:rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden"
								>
									{children}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
