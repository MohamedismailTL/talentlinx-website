import React from 'react';

import berlinImage from '/public/assets/berlin-germany-alexanderplatz-tv-tower-after.jpg';
import profileImage from '/public/assets/mohamed-ismail.png';

export default function Example({quote}: any) {

    const finalQuote = quote.frontmatter.quote || 'Standard-Zitat, falls leer';
    const finalPerson = quote.frontmatter.person || 'Max Mustermann';
    const finalJob = quote.frontmatter.job_title || 'Berufsbezeichnung';

    return (
        <div
            className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
            style={{
                backgroundImage: `url(${berlinImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-aqua-900/40" aria-hidden="true"/>

            {/* Inhalt (z-10, damit es über dem Overlay liegt) */}
            <div className="relative z-10 mx-auto max-w-2xl text-center">
                {/* Zitat aus dem CMS */}
                <p className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                    {`"${finalQuote}"`}
                </p>

                {/* Kreisrundes Profilbild */}
                <div className="mt-10 flex flex-col items-center">
                    <img
                        src={profileImage.src}
                        alt={finalPerson}
                        className="h-28 w-28 rounded-full border-4 border-brand-aqua-200 object-cover"
                    />

                    {/* Name und Berufsbezeichnung (aus dem CMS) */}
                    <p className="mt-4 font-bold text-white">{finalPerson}</p>
                    <p className="text-gray-300">{finalJob}</p>
                </div>
            </div>
        </div>
    );
}
