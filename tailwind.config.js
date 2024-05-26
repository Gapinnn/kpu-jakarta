/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.png')",
      },
      colors: {
        maroon: {
          DEFAULT: "#340705",
          light: "#660300",
        },
        orange: {
          DEFAULT: "#e8300e",
          light: "#e95007",
        },
        gold: {
          DEFAULT: "#ffbf00",
          neutral: "#ffdc73",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
