/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   montserrat: ["Montserrat", "sans-serif"],
      //   sans: ["DM Sans", "sans-serif"],
      // },
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
    },
  },
  plugins: [],
};
