/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-50": "#e7e7ed",
      "primary-100": "#b6b3c6",
      "primary-200": "#928fab",
      "primary-300": "#605c84",
      "primary-400": "#413c6d",
      "primary-500": "#120b48",
      "primary-600": "#100a42",
      "primary-700": "#0d0833",
      "primary-800": "#0a0628",
      "primary-900": "#08051e",
      "secondary-50": "#e6f3f3",
      "secondary-100": "#b0d8d8",
      "secondary-200": "#8ac6c6",
      "secondary-300": "#54abab",
      "secondary-400": "#339b9b",
      "secondary-500": "#008282",
      "secondary-600": "#007676",
      "secondary-700": "#005c5c",
      "secondary-800": "#004848",
      "secondary-900": "#003737",
    },
    fontFamily: {
      "inter": ['Inter', 'sans-serif'],
      "sora": ['Sora', 'sans-serif'],
      "workSans": ['Work Sans', 'sans-serif'],
      "manrope": ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}