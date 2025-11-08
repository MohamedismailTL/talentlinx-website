interface CTAButtonProps {
    link: string
}

export default function CTAButton({link}: CTAButtonProps) {
    return (
        <a
            href={link}
            className="
        relative
        w-full
        sm:w-auto
        flex
        items-center
        justify-center
        gap-3
        px-6
        py-3
        text-base
        font-normal
        text-white
        rounded-md
        bg-gradient-to-r
        from-brand-emerald-700
        to-brand-emerald-800
        transition-all
        duration-300
        hover:bg-gradient-to-r
        hover:from-brand-emerald-600
        hover:to-brand-emerald-700
        hover:scale-105
        shadow-lg
        shadow-brand-emerald-700/30
        focus:outline-none
      "
        >
            <span>Beratungstermin vereinbaren</span>
        </a>
    )
}
