import Steps from "./Steps";
import CTAButton from "./CTAButton.tsx";

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-gradient-to-br from-brand-primary-900 to-brand-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
                >
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Top-Besetzung für dein Team – in 30 Tagen
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300 pb-12">
                        Finde jetzt mit TalentLynx die richtige Verstärkung – präzise, schnell und ohne Risiko.
                    </p>
                    <Steps
                        steps={[
                            {id: '01', name: 'Beratungstermin vereinbaren'},
                            {id: '02', name: 'Anforderungen an Kandidaten festlegen'},
                            {id: '03', name: 'In 30 Tagen zur neuen Fachkraft'},
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
