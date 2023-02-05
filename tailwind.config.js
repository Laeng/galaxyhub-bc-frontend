const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
                together: ['TTTogether']
            },
            colors: {
                '222222': '#222222',
                'discord': '#5865F2'
            }
        },
    },
    plugins: [
        require('@headlessui/tailwindcss')
    ],
}
