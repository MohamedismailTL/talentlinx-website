/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: {
                        50: '#E8F0FA',
                        100: '#C5D9F2',
                        200: '#A0C0EA',
                        300: '#7AA7E2',
                        400: '#588FDA',
                        500: '#1D3557', // Hauptfarbe (dunkelblau)
                        600: '#172B48',
                        700: '#12223A',
                        800: '#0C192B',
                        900: '#08121E',
                    },
                    aquamarine: {
                        50: '#E0F7FA',
                        100: '#B2EBF2',
                        200: '#81D4FA',
                        300: '#4FC3DC',
                        400: '#29B6F6',
                        500: '#039BE5', // Sekundärfarbe (aquamarin)
                        600: '#0288D1',
                        700: '#0277BD',
                        800: '#01579B',
                        900: '#003E6B',
                    },
                    coral: {
                        50: '#FFE9E6',
                        100: '#FFCFCB',
                        200: '#FFB3AF',
                        300: '#FF968E',
                        400: '#FF7A72',
                        500: '#FF6F61', // Akzentfarbe (koralle)
                        600: '#E5564A',
                        700: '#CC4438',
                        800: '#B3342A',
                        900: '#802319',
                    },
                    aqua: {
                        50: '#E3F4FB',
                        100: '#B8E3F5',
                        200: '#8CD2EF',
                        300: '#61C1E9',
                        400: '#35B0E3',
                        500: '#63C1E5', // Base color
                        600: '#2A9AC7',
                        700: '#217A9E',
                        800: '#185A75',
                        900: '#0F3A4C',
                    },
                },
            },
        },
    },
    plugins: [],
}
