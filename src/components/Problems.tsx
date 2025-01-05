import { useEffect, useRef, useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import ReactMarkdown from 'react-markdown';

export default function Example({ children, problems }: any) {
	const { headline, text, problem_list } = problems.frontmatter;
	const problemsData = {
		headline,
		text,
		problemList: problem_list.map((item: any) => item.problem)
	};
	const [inView, setInView] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<div ref={sectionRef} className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div
						className={`px-6 lg:px-0 lg:pr-4 lg:pt-4 transform transition-all duration-700 ease-out
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
					>
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
								{problemsData.headline}
							</h2>
							<p className="mt-6 text-lg text-gray-600">
								{problemsData.text}
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
								{problemsData.problemList.map((feature: any, index: any) => (
									<div
										key={feature.name}
										className="relative pl-9 transform transition-all duration-700 ease-out"
										style={{
											transitionDelay: inView ? `${index * 150}ms` : '0ms',
											opacity: inView ? 1 : 0,
											transform: inView ? 'translateY(0)' : 'translateY(10px)'
										}}
									>
										<dt className="inline text-gray-900">
											<ExclamationCircleIcon
												aria-hidden="true"
												className="absolute left-1 top-1 h-5 w-5 text-brand-aqua-500"
											/>
											<ReactMarkdown>{problemsData.problemList[index]}</ReactMarkdown>
										</dt>
									</div>
								))}
							</dl>
						</div>
					</div>
					<div className="sm:px-6 lg:px-0 -mx-4 sm:-mx-0">
						<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-full">
							<div
								className="-mb-12 w-full max-w-full rounded-none md:rounded-2xl shadow-lg overflow-hidden"
							>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
