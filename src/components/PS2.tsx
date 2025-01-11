import React from 'react';
import berlinImage from '/public/assets/berlin-germany-alexanderplatz-tv-tower-after.jpg';
import profileImage from '/public/assets/mohamed-ismail.jpg';

export default function Example() {
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
            <div className="absolute inset-0 bg-brand-aqua-900/40" aria-hidden="true" />
            {/*
        Du kannst hier statt 'bg-black/40'
        jede andere Farbe mit Tailwind-Opacity verwenden,
        z. B. 'bg-brand-aqua-500/20' für ein aqua-Overlay
        mit 20% Deckkraft.
      */}

            {/* Inhalt: bekommt einen höheren z-Index, um über dem Overlay zu liegen */}
            <div className="relative z-10 mx-auto max-w-2xl text-center">
                {/* Großes Zitat */}
                <p className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                    "Berlin, die Stadt, die niemals schläft. Eine Skyline, die Geschichte erzählt."
                </p>

                {/* Kreisrundes Profilbild mit Rand */}
                <div className="mt-10 flex flex-col items-center">
                    <img
                        src={profileImage.src}
                        alt="Mohamed Ismail"
                        className="h-28 w-28 rounded-full border-2 border-brand-aqua-600 object-cover"
                    />

                    {/* Name und Berufsbezeichnung */}
                    <p className="mt-4 font-bold text-white">Mohamed Ismail</p>
                    <p className="text-gray-300">Freelance Photographer</p>
                </div>
            </div>
        </div>
    );
}
