import { PhoneIcon } from '@heroicons/react/20/solid'

export default function CTAButton() {
    return (
        <button
            className="relative tracking-wider w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 text-base font-normal text-white rounded-md bg-brand-aqua-500 transition-transform duration-300 hover:scale-105 hover:border hover:border-brand-primary-500 focus:outline-none"
        >
            {/* Text */}
            <span>Beratungstermin vereinbaren</span>
        </button>
    )
}
