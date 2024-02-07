/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Poppins",
      tertiary: "Acme",
      quad: "Protest Riot",
      fifth: "Lobster",
    },
    colors: {
      primary: "#dae2df",
      secondary: "#292f2b",
      tertiary: "#516167",
      quad: "radial-gradient(circle, rgba(169,213,242,1) 0%, rgba(0,0,0,1) 55%)",
    },
    extend: {},
  },
  plugins: [Myclass],
};
