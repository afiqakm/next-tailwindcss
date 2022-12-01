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
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        enlarge: 'enlarge 0.5s ease-in-out forwards',
      }
    },
  },
  daisyui: {
    themes: [
      {
        afiqakmdark: {
          "primary": "#F2E9E4",
          "secondary": "#C9ADA7",
          "accent": "#9A8C98",
          "neutral": "#4a4e69",
          "base-100": "#22223B",
          "info": "#54A1F2",
          "success": "#1B7964",
          "warning": "#AC8E0C",
          "error": "#F26E7B",
        },
        afiqakmlight: {
          "primary": "#22223B",
          "secondary": "#4a4e69",
          "accent": "#9A8C98",
          "neutral": "#C9ADA7",
          "base-100": "#F2E9E4",
          "info": "#54A1F2",
          "success": "#1B7964",
          "warning": "#AC8E0C",
          "error": "#F26E7B",
        },
      },
      "coffee",
    ],
  },
  plugins: [require("daisyui")],
}
