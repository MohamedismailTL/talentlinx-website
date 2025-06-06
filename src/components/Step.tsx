// Step.tsx
import React from 'react';

interface StepProps {
    step: {
        box_title: string;
        box_text: string;
    };
    index: number;
}

function Step({step: boxStep, index}: StepProps) {
    return (
        <div
            className="
        sticky top-16
        bg-white
        rounded-2xl
        flex items-center
        mx-auto
        px-6 py-6  /* Mehr vertikales Padding */
        w-full
        max-w-sm
        sm:max-w-md
        md:max-w-xl
        min-h-[12rem]
        sm:min-h-[16rem]
      "
            style={{
                zIndex: index + 1,
                position: 'sticky', // Für maximale Kompatibilität
            }}
        >
            {/* Nummerierung ohne Hintergrund */}
            <span
                className="
    flex items-center justify-center
    rounded-full
    w-12 h-12
    text-2xl
    font-bold
    border-2 border-brand-aqua-200
    text-brand-aqua-600
    mr-6
    shrink-0
  "
            >
  {index + 1}
</span>


            {/* Text-Content */}
            <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {boxStep.box_title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-gray-600">
                    {boxStep.box_text}
                </p>
            </div>
        </div>
    );
}

export default Step;
