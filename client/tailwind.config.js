/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)",
        },
        secondary: {
          DEFAULT: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)",
        },
      },
    },
  },
  plugins: [],
}

