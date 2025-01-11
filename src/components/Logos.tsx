// Example.tsx
import React, {useState, useEffect} from 'react';
import awsSummitLogo from '../assets/aws-summit-logo.png';
import googleCloudSummitLogo from '../assets/google-cloud-summit-logo.png';
import webSummitLogo from '../assets/websummit-logo.png';
import greenTechFestivalLogo from '../assets/green-tech-festival-logo.png';
import itsaLogo from '../assets/itsa-logo.png';
import bitsAndPretzelsLogo from '../assets/bits-and-pretzels-logo.png';
import dmExcoLogo from '../assets/dm-exco-logo.png';

// Swiper-Stile importieren
import 'swiper/css';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

export default function Example({conferences}: any) {
    const {headline} = conferences.frontmatter;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms Verzögerung

        return () => clearTimeout(timer);
    }, []);

    // Original Slides
    const slides = [
        {
            alt: 'AWS Summit',
            src: awsSummitLogo.src
        },
        {
            alt: 'Google Cloud Summit',
            src: googleCloudSummitLogo.src
        },
        {
            alt: 'Web Summit',
            src: webSummitLogo.src
        },
        {
            alt: 'Green Tech Festival',
            src: greenTechFestivalLogo.src
        },
        {
            alt: 'ITSA',
            src: itsaLogo.src
        },
        {
            alt: 'Bits & Pretzels',
            src: bitsAndPretzelsLogo.src
        },
        {
            alt: 'DM EXCO',
            src: dmExcoLogo.src
        }
    ];
    // Duplizierte Slides für nahtloses Looping
    const duplicatedSlides = [...slides, ...slides, ...slides];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Flex-Container für das Layout: flex-col auf kleineren Bildschirmen, flex-row auf größeren */}
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Linker Bereich: Text */}
                    <div
                        className={`w-full lg:w-1/2 transform transition-opacity transition-transform duration-700 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{transitionDelay: '200ms'}}
                    >
                        <div className="text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                                {headline}
                            </h2>
                        </div>
                    </div>

                    {/* Rechter Bereich: Logo-Slider */}
                    <div
                        className={`w-full lg:w-1/2 transform transition-opacity transition-transform duration-700 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{transitionDelay: '400ms'}}
                    >
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={2}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false
                            }}
                            speed={5000}
                            freeMode={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            }}
                            className="mySwiper"
                        >
                            {duplicatedSlides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center">
                                        <img
                                            alt={slide.alt}
                                            src={slide.src}
                                            className="h-auto max-h-16 sm:max-h-20 border border-gray-200 rounded-lg shadow-sm"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
