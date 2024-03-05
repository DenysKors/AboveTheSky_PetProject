/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {},
      fontFamily: {
        main: ["MadimiOne", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
