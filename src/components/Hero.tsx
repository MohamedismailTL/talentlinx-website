import React, {useState} from 'react';
import {Dialog, DialogPanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import CTAButton from './CTAButton.tsx';
import Typewriter from './Typewriter.tsx';
import logo from '../assets/talentlinx-logo.png';

const navigation = [
    {name: 'Über uns', href: '#ueber-uns'},
    {name: 'Prozess', href: '#prozess'},
    {name: 'Kontakt', href: '#kontakt'}
];

export default function Example({content, metadata, children}: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <div className="bg-gradient-to-br from-white to-brand-aqua-50">
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
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm/6 font-normal text-brand-primary-700 hover:text-brand-primary-400"
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
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
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
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
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

            <div className="relative isolate pt-14">
                {/*<svg*/}
                {/*    aria-hidden="true"*/}
                {/*    className="absolute inset-0 -z-10 size-full stroke-brand-primary-500 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"*/}
                {/*>*/}
                {/*    <defs>*/}
                {/*        <pattern*/}
                {/*            x="50%"*/}
                {/*            y={-1}*/}
                {/*            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"*/}
                {/*            width={200}*/}
                {/*            height={200}*/}
                {/*            patternUnits="userSpaceOnUse"*/}
                {/*        >*/}
                {/*            <path d="M100 200V.5M.5 .5H200" fill="none"/>*/}
                {/*        </pattern>*/}
                {/*    </defs>*/}
                {/*    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%"/>*/}
                {/*</svg>*/}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-aqua-200 to-brand-aqua-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div
                    className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 text-2xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            <Typewriter jobs={content.frontmatter.job_titles}
                                        className="font-mono text-brand-aqua-600"/><br/>
                            {content.frontmatter.hero_title}
                        </h1>
                        <p className="mt-8 text-lg font-normal text-gray-600 sm:text-xl max-w-2xl">
                            {content.frontmatter.hero_subtitle}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <CTAButton link={metadata.frontmatter.ctalink}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
