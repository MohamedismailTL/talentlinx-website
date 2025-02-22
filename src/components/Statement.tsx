import { useState, useEffect } from 'react';
import curve from '../assets/section-curve.svg';


export default function Example({ statement }: any) {
	const headline = statement.frontmatter.headline;
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100); // 100ms Verzögerung

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className="-mb-1 -mx-1 pt-48 sm:pt-64 flex items-end"
			style={{
				backgroundImage: `url(${curve.src})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top center',
				backgroundSize: 'cover'
			}}
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-left">
						<h2
							className={`text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white 
              transform transition-opacity transition-transform duration-700 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
							style={{ transitionDelay: '200ms' }}
						>
							{headline}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
