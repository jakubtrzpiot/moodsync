/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lufga)'],
      },
      colors: {
        bg: '#121212',
        accent: '#202020',
        primary: '#a191de',
        secondary: '#f0f424',
        text: '#eaebef',
      },
    },
  },
  plugins: [],
};
