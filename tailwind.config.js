/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '100': '220px',
      },
      keyframes: {
        enlarge: {
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1.2)'},
        },
      },
      animation: {
        enlarge:'enlarge 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [require("daisyui")],
}
