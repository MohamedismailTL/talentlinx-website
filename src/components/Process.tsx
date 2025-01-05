import Step from './Step';
import CTAButton from './CTAButton';

export default function Example({ process, metadata }: any) {
    const { headline, text, process_boxes } = process.frontmatter;

    return (
        <div
            id="prozess"
            className="relative isolate overflow-hidden bg-gradient-to-br from-white to-brand-aqua-50 px-6 py-16 sm:py-32 lg:overflow-visible lg:px-0 mt-16"
        >
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* Linker Sticky-Abschnitt */}
                <div className="sticky top-16 z-10">
                    <div className="max-w-3xl mx-auto text-left">
                        {/* Überschrift kleiner (3xl auf Mobile) und linksbündig */}
                        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                            {headline}
                        </h2>
                        {/* Text ebenfalls linksbündig */}
                        <p className="mt-6 text-lg text-gray-600">
                            {text}
                        </p>
                        {/* CTAButton mit mehr Abstand nach unten */}
                        <div className="mt-8 mb-16 flex justify-start">
                            <CTAButton link={metadata.frontmatter.ctalink} />
                        </div>
                    </div>
                </div>

                {/* Rechte Spalte: Steps (Timeline) */}
                <div>
                    <div className="relative flex flex-col items-center">
                        <div className="flex flex-col space-y-6 w-full">
                            {process_boxes.map((step: any, index: any) => (
                                <Step key={step.box_title} step={step} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
