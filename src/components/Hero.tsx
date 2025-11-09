import React, {useState} from 'react';
import {Dialog, DialogPanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import CTAButton from './CTAButton.tsx';
import Reviews from "./Reviews";
import avatar1 from '../assets/avatars/avatar-1.jpg';
import avatar2 from '../assets/avatars/avatar-2.jpg';
import avatar3 from '../assets/avatars/avatar-3.jpg';
import avatar4 from '../assets/avatars/avatar-4.jpg';
import avatar5 from '../assets/avatars/avatar-5.jpg';

const navigation = [
    {name: 'Über uns', href: '#ueber-uns'},
    {name: 'Prozess', href: '#prozess'},
    {name: 'Kontakt', href: '#kontakt'},
];

const avatars = [
    {image_path: avatar1.src, image_alt_text: 'Avatar 1'},
    {image_path: avatar2.src, image_alt_text: 'Avatar 2'},
    {image_path: avatar3.src, image_alt_text: 'Avatar 3'},
    {image_path: avatar4.src, image_alt_text: 'Avatar 4'},
    {image_path: avatar5.src, image_alt_text: 'Avatar 5'},
];

const reviewLink = '<a href="https://maps.app.goo.gl/sjRA6UaQbsufxTYg8" target="_blank" rel="noopener">5/5 Sterne bei Google</a>\n';

export default function Example({content, metadata, children}: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Diese Funktion kümmert sich um das weiche Scrollen:
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, anchor: string) => {
        e.preventDefault(); // Verhindert das direkte Springen
        const target = document.querySelector(anchor);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
            });
        }

        // Schließt das mobile Menü, sobald geklickt wurde
        setMobileMenuOpen(false);
    };

    return (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/hero-image.jpg)'}}>
            {/* Overlay für bessere Lesbarkeit */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-600/70 to-brand-primary-600/75"></div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {children}
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-primary-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                // onClick für Desktop-Navigation, falls auch dort "Smooth Scroll" gewünscht
                                onClick={e => handleScroll(e, item.href)}
                                className="text-sm/6 font-normal text-white hover:text-brand-teal-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-primary-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-primary-700">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-brand-primary-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-brand-primary-700">
                                <div className="space-y-2 py-6">
                                    {navigation.map(item => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={e => handleScroll(e, item.href)} // Wichtig: Smooth Scroll + Menü schließen
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-brand-primary-50 hover:bg-brand-primary-800"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate pt-14 z-10">
                {/* ... Restliche Hero Section etc. ... */}
                <div
                    className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-7xl">
                            {content.frontmatter.hero_title}
                        </h1>
                        <p className="mt-8 text-lg font-normal text-gray-100 sm:text-xl mx-auto max-w-2xl">
                            {content.frontmatter.hero_subtitle}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <CTAButton link={metadata.frontmatter.ctalink}/>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <Reviews
                                avatars={avatars}
                                review_headline="250+ Partner deutschlandweit"
                                review_text={reviewLink}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
