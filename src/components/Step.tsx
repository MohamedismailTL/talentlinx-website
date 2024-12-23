import React from 'react';

interface StepProps {
	step: {
		box_title: string;
		box_text: string;
	};
	index: number;
}

function Step({ step: boxStep, index }: StepProps) {
	return (
		<div
			className="
        sticky top-16  /* Leicht nach unten versetzt */
        bg-white
        rounded-2xl
        flex items-center
        mx-auto
        px-6 py-4
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
			{/* Kreis mit Nummerierung */}
			<div
				className="
          w-14 h-14
          flex items-center justify-center
          bg-brand-aqua-600
          text-white
          text-2xl
          font-bold
          rounded-full
          mr-6
          shrink-0
        "
			>
				{index + 1}
			</div>

			{/* Text-Content */}
			<div className="flex-1">
				<h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
					{boxStep.box_title}
				</h3>
				<p className="mt-3 text-base sm:text-lg text-gray-700">
					{boxStep.box_text}
				</p>
			</div>
		</div>
	);
}

export default Step;
