// Example.tsx
import React, {useState, useEffect} from 'react';
import CTAButton from './CTAButton.tsx';

export default function Example({cta, metadata}: any) {
    const [isVisible, setIsVisible] = useState(false);
    const {headline, subtitle} = cta.frontmatter;

    useEffect(() => {
        // Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms Verzögerung

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="kontakt"
            className="bg-white"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gradient-to-br from-brand-primary-700 to-brand-primary-800 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    {/* Überschrift */}
                    <h2
                        className={`text-balance text-3xl lg:text-5xl font-semibold tracking-tight text-white
                        transform transition-opacity transition-transform duration-700
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{transitionDelay: '200ms'}}
                    >
                        {headline}
                    </h2>

                    {/* Absatz */}
                    <p
                        className={`mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-brand-primary-100
                        transform transition-opacity transition-transform duration-700
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{transitionDelay: '400ms'}}
                    >
                        {subtitle}
                    </p>

                    {/* CTA-Button-Bereich */}
                    <div
                        className={`mt-10 flex items-center justify-center gap-x-6
                        transform transition-opacity transition-transform duration-700
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{transitionDelay: '600ms'}}
                    >
                        <CTAButton link={metadata.frontmatter.ctalink}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
