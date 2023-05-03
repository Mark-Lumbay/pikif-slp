/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts,html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBtn: "#236576",
        primaryHovBtn: "#1c515e",
        primaryBlue: "#236477",
        secondaryBlue: "#397485",
        secondaryDarker: "#1c505f",
        iconClr: "#97bd65",
      },
    },
  },
  plugins: [],
};
