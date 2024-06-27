/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      lineHeight: {
        'extra-loose': '2.25', // Assuming line-height: 36px for font-size 16px
      },
      colors: {
        gold: {
          500: '#FFD700',
        },
        lightGold: "#F9AC2514",

      },
    },
  },
  plugins: [],
}

