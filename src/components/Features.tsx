import { useEffect, useRef, useState } from 'react';

export default function Example({ features, children }: any) {
    const featureList = features.frontmatter.boxes.map((box: any) => ({
        chip: box.chip,
        title: box.title,
        text: box.text
    }));
    const [inView, setInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div id="ueber-uns" className="bg-white py-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Zweispaltige Grid-Struktur */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    {/* Linke Spalte: Headline + Text */}
                    <div className="mt-4 sm:mt-0">
                        {/*
                            Überschrift für Mobile verkleinern (text-3xl) und zentrieren (text-center).
                            Ab Tablet-Größe (sm:) wird sie etwas größer und linksbündig.
                        */}
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 text-center sm:text-left">
                            {features.frontmatter.headline}
                        </h2>
                    </div>

                    {/* Rechte Spalte: Bild ({children}).
                        Verringere den Abstand oben/unten speziell für mobile Screens.
                        Hier z.B. py-4 statt py-8 auf Mobile, und bei größeren Screens bleibt mehr Platz.
                    */}
                    <div className="flex justify-center py-4 sm:py-16">
                        {children}
                    </div>
                </div>

                {/* Der Rest bleibt größtenteils identisch */}
                <div
                    ref={containerRef}
                    className="mx-auto mt-12 sm:mt-24 grid max-w-2xl grid-cols-1 gap-y-8
                     sm:grid-cols-2 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-stretch"
                >
                    {featureList.map((feature: any, index: any) => {
                        const {
                            chip,
                            title,
                            text,
                            chipBgColor = 'bg-brand-aqua-600',
                            chipTextColor = 'text-brand-aqua-50'
                        } = feature;

                        return (
                            <div
                                key={title}
                                style={{
                                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                                    transitionDelay: inView ? `${index * 150}ms` : '0ms'
                                }}
                                className={`flex flex-col h-full border border-gray-200 rounded-2xl p-8 shadow-sm 
                            hover:shadow-xl transform
                            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            >
                                <div
                                    className={`mb-4 flex text-sm/4 items-center justify-center rounded-full ${chipBgColor} ${chipTextColor} w-fit px-3 py-1.5`}
                                >
                                    <span>{chip}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                <p className="mt-2 text-base text-gray-600">{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
