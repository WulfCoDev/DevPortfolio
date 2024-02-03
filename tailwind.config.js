/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
