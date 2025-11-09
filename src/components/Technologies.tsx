import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import CTAButton from './CTAButton.tsx';

export default function Example({ diagram, metadata, children }: any) {
    const [isVisible, setIsVisible] = useState(false);

    // Wir lesen die Daten aus dem Frontmatter aus (title, text, bullet_points[])
    const {
        title,
        text,
        bullet_points = [],
    } = diagram.frontmatter;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden bg-white pt-16 sm:py-32">
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
                                className={`mt-2 text-pretty text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 transform transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: '200ms' }}
                            >
                                {title}
                            </h2>

                            {/* Bild (children) nur mobil sichtbar - negiert px-4 (16px) + px-6 (24px) = -mx-10 (40px) */}
                            <div
                                className={`block sm:hidden my-6 w-screen -mx-10 rounded-none overflow-hidden transform transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                {children}
                            </div>

                            {/* Haupt-Text (Markdown optional) */}
                            <div
                                className={`my-6 text-lg text-gray-600 transform transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                <ReactMarkdown>{text}</ReactMarkdown>
                            </div>

                            {/* Dynamische Aufzählung mit Markdown-Unterstützung */}
                            {bullet_points.length > 0 && (
                                <ul
                                    className={`space-y-4 transform transition-all duration-700 ${
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{ transitionDelay: '600ms' }}
                                >
                                    {bullet_points.map((item: { bullet_point: string }, index: number) => (
                                        <li key={index} className="flex items-start">
                      <span
                          className="
                          flex-shrink-0
                          inline-flex
                          items-center
                          justify-center
                          h-6 w-6
                          rounded-full
                          bg-brand-aqua-500
                          text-white
                          mr-3
                          mt-1
                        "
                      >
                        <svg
                            className="h-3.5 w-3.5"
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
                                            {/* Bulletpoint-Text als Markdown */}
                                            <div className="text-base text-gray-600">
                                                <ReactMarkdown>{item.bullet_point}</ReactMarkdown>
                                            </div>
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

                    {/* Rechte Seite: Bild (children) nur auf größeren Bildschirmen sichtbar */}
                    <div
                        className={`sm:px-6 lg:px-0 transform transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <div className="-mx-4 sm:mx-0">
                            <div className="mx-auto max-w-2xl sm:max-w-full">
                                {/* Hier wird das Bild nur ab sm (>=640px) gezeigt */}
                                <div className="hidden sm:block w-full rounded-none md:rounded-2xl overflow-hidden">
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
