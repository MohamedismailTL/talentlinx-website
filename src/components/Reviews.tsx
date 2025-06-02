import React from "react";

interface Avatar {
    image_path: string;
    image_alt_text: string;
}

interface Props {
    avatars: Avatar[];
    review_headline: string;
    review_text: string;
}

const Reviews: React.FC<Props> = ({
                                      avatars,
                                      review_headline,
                                      review_text,
                                  }) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
            {/* Avatare */}
            <div className="isolate flex -space-x-2 overflow-visible">
                {avatars.map((avatar, index) => (
                    <img
                        key={index}
                        src={avatar.image_path}
                        alt={avatar.image_alt_text}
                        className="relative z-30 inline-block size-10 rounded-full
                       ring-2 ring-brand-aqua-500"
                    />
                ))}
            </div>

            {/* Headline + Sterne + Text */}
            <div className="mt-4 sm:mt-0 sm:ml-6 sm:text-left">
                <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {review_headline}
                </p>

                <div className="mt-2 flex items-start sm:items-center">
                    {/* 5 gelbe Sterne */}
                    <div className="flex items-center">
                        {Array.from({length: 5}).map((_, i) => (
                            <svg
                                key={i}
                                className="size-5 shrink-0 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                />
                            </svg>
                        ))}
                    </div>

                    {/* Review-Text (HTML erlaubt) */}
                    <p
                        className="ml-2 text-sm text-gray-700 dark:text-gray-300 hover:underline"
                        dangerouslySetInnerHTML={{__html: review_text}}
                    ></p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
