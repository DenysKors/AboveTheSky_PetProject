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
        text: "rgb(255 255 255)",
      },
      fontFamily: {
        logo: ["MadimiOne", "sans-serif"],
        main: ["Oswald", "sans-serif"],
        text: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "2.25rem",
      },
      height: {
        390: "390px",
        620: "620px",
        720: "720px",
      },
      backgroundImage: {
        hero: "url('./assets/images/hero.jpg')",
        "radial-gradient":
          "radial-gradient (circle_at_center_left, rgba(162,13,0, 0.5)_0%,rgb(0,0,0)_100%)",
      },
      boxShadow: {
        nav: "rgba(256, 256, 256, 0.8) 0px -10px 30px 4px;",
      },

      keyframes: {
        flyMobile: {
          "0%": { transform: "translatey(0)" },
          "50%": { transform: "translatey(-10px)" },
          "100%": { transform: "translatey(0)" },
        },
        flyTablet: {
          "0%": { transform: "translatey(0)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translatey(0)" },
        },
      },
      animation: {
        flyMobile: "flyMobile 3s ease-in-out 8",
        flyTablet: "flyTablet 3s ease-in-out 8",
      },
    },
  },
  plugins: [],
};
