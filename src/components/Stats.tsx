import { useState, useEffect } from 'react';


export default function Example({ statement }: any) {
	// Exakt nur "statements" und "statistics" extrahieren
	const { statements, statistics } = statement.frontmatter;

	// Statische Arrays ersetzen wir durch Mappings
	const features = statements.map((stmt: any, index: any) => ({
		name: stmt.statement_title,
		description: stmt.statement_text
	}));

	const stats = statistics.map((stat: any, index: any) => ({
		id: index + 1,
		name: stat.statistic_subtitle,
		value: stat.statistic_text
	}));

	// Animation / Fade-in-Logic
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-brand-aqua-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">

				{/* Hier KEINE HEADLINE mehr! */}

				{/* Features Section */}
				<section className="mb-24">
					<dl
						className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
						{features.map((feature: any, index: any) => (
							<article
								key={feature.name}
								className={`text-center transform transition-opacity transition-transform duration-700 ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
								}`}
								style={{ transitionDelay: `${200 + index * 200}ms` }}
							>
								<h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white">
									{feature.name}
								</h3>
								<p className="mt-2 text-lg sm:text-xl lg:text-xl">
									{feature.description}
								</p>
							</article>
						))}
					</dl>
				</section>

				{/* Stats Section */}
				<section>
					<dl
						className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
						{stats.map((stat: any, index: any) => (
							<div
								key={stat.id}
								className={`flex flex-col bg-brand-primary-900/50 p-8 transform transition-opacity transition-transform duration-700 ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
								}`}
								style={{ transitionDelay: `${400 + index * 200}ms` }}
							>
								<dt className="text-sm font-semibold text-brand-aqua-500 pt-2">
									{stat.name}
								</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-white">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</section>
			</div>
		</div>
	);
}
