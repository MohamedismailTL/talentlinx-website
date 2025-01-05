// TestimonialsSlider.tsx
import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

// Swiper-Stile importieren
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

interface Testimonial {
    testimonial: string;
    person: string;
    job_title: string;
    company_logo?: string; // Optionales Feld
}

interface TestimonialsSliderProps {
    testimonials: {
        frontmatter: {
            headline: string;
            testimonial_boxes: Testimonial[];
        };
    };
    metadata: any;
}

export default function TestimonialsSlider({ testimonials, metadata }: TestimonialsSliderProps) {
    // Debug: Konsolenausgabe, um die Daten zu prüfen
    console.log(testimonials);

    // Daten aus dem Frontmatter extrahieren
    const headline = testimonials.frontmatter.headline;
    const testimonial_boxes = testimonials.frontmatter.testimonial_boxes;

    // State für Animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Überschrift und CTA Button */}
                <div className="mx-auto max-w-2xl text-center">
                    {/* Überschrift */}
                    <p
                        className={`mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl 
              transform transition-opacity transition-transform duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        {headline}
                    </p>

                    {/* Zentrierter Button mit mehr Abstand nach oben */}
                    {/*<div className="flex justify-center mt-8">*/}
                    {/*    <CTAButton link={metadata.frontmatter.ctalink} />*/}
                    {/*</div>*/}
                </div>

                {/* Testimonials Slider */}
                <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:max-w-3xl lg:mt-24">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30} // Reduzierter Abstand zwischen den Slides
                        slidesPerView={1} // Eine Slide pro View
                        loop={true}
                        autoplay={{
                            delay: 5000, // 5 Sekunden pro Slide
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        speed={1000} // Übergangsgeschwindigkeit
                        className="mySwiper"
                    >
                        {testimonial_boxes.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`
                          mb-8
                          transform transition-opacity transition-transform duration-700 
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                                >
                                    <figure className="rounded-xl bg-gray-50 p-8 text-sm shadow-md mx-auto">
                                        <blockquote className="text-lg text-gray-800 italic leading-relaxed">
                                            <p>{testimonial.testimonial}</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center space-x-4">
                                            {testimonial.company_logo && (
                                                <img
                                                    src={testimonial.company_logo}
                                                    alt={`${testimonial.person} - ${testimonial.job_title}`}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            )}
                                            <div>
                                                <div className="font-bold text-gray-900">
                                                    {testimonial.person}
                                                </div>
                                                <div className="text-gray-600">{testimonial.job_title}</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
