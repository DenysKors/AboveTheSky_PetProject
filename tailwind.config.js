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
      colors: {
        herobg: "rgb(6,6,6)",
        logo: "rgb(255 255 255)",
      },
      fontFamily: {
        logo: ["MadimiOne", "sans-serif"],
        main: ["Oswald", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "1.875rem",
      },
      height: {
        390: "390px",
        620: "620px",
        720: "720px",
      },
      backgroundImage: {
        hero: "url('./assets/images/hero.jpg')",
      },
      boxShadow: {
        nav: "rgba(256, 256, 256, 0.56) 0px -10px 30px 4px;",
      },
    },
  },
  plugins: [],
};
