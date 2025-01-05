import { useState, useEffect } from 'react';
import CTAButton from './CTAButton.tsx';

export default function Example({ diagram, metadata, children }: any) {
    const [isVisible, setIsVisible] = useState(false);

    // Aus dem Frontmatter holen wir uns:
    // - title
    // - text
    // - bullet_points (Array)
    const {
        title,
        text,
        bullet_points = [], // Falls kein bullet_points existiert, setzen wir einen leeren Array als Fallback
    } = diagram.frontmatter;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    {/* Linke Seite */}
                    <div
                        className={`px-6 lg:px-0 lg:pr-4 transform transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2
                                className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl transform transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: '200ms' }}
                            >
                                {title}
                            </h2>
                            <p
                                className={`my-6 text-lg text-gray-600 transform transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                {text}
                            </p>

                            {/* Dynamische Aufzählungspunkte */}
                            {bullet_points.length > 0 && (
                                <ul
                                    className={`space-y-4 transform transition-all duration-700 ${
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{ transitionDelay: '600ms' }}
                                >
                                    {bullet_points.map((item: { bullet_point: string }, index: number) => (
                                        <li key={index} className="flex items-start">
                                            {/* Kleiner, runder Hintergrund */}
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-aqua-500 text-white mr-3">
                        {/* Kleines Check-Icon */}
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                                            <p className="text-base text-gray-700">
                                                {item.bullet_point}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* CTA-Button */}
                            <div className="mt-8 w-full sm:w-auto inline-block">
                                <CTAButton link={metadata.frontmatter.ctalink} />
                            </div>
                        </div>
                    </div>

                    {/* Rechte Seite */}
                    <div
                        className={`sm:px-6 lg:px-0 transform transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <div className="-mx-4 sm:mx-0">
                            <div className="mx-auto max-w-2xl sm:max-w-full">
                                <div className="w-full rounded-none md:rounded-2xl overflow-hidden">
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
