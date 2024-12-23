const defaultSteps = [
    {id: '01', name: 'Beratungstermin'},
    {id: '02', name: 'Anforderungen festlegen'},
    {id: '03', name: 'Neue Fachkraft in 30 Tagen'},
];

export default function Steps({steps = defaultSteps}: { steps?: { id: string; name: string }[] }) {
    return (
        <section
            aria-label="Steps"
            className="rounded-md border border-gray-600 bg-brand shadow-md"
        >
            <ol
                role="list"
                className="divide-y divide-gray-700 md:flex md:divide-y-0"
            >
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className="relative md:flex md:flex-1">
                        <div className="flex items-center px-6 py-4 text-sm font-medium">
                            {/* Number inside the circle */}
                            <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-aquamarine-500 hover:bg-brand-coral-500 font-semibold">
                                {stepIdx + 1}
                            </span>
                            <span className="ml-4 text-sm font-medium text-gray-200 hover:underline">
                                {step.name}
                            </span>
                        </div>

                        {stepIdx !== steps.length - 1 ? (
                            <>
                                {/* Arrow separator for large screens */}
                                <div
                                    aria-hidden="true"
                                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                                >
                                    <svg
                                        fill="none"
                                        viewBox="0 0 22 80"
                                        preserveAspectRatio="none"
                                        className="h-full w-full text-gray-700"
                                    >
                                        <path
                                            d="M0 -2L20 40L0 82"
                                            stroke="currentColor"
                                            vectorEffect="non-scaling-stroke"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </>
                        ) : null}
                    </li>
                ))}
            </ol>
        </section>
    );
}
