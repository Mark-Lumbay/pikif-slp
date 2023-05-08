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
        btnGreen: "#7cad3e",
        primaryRed: "#ef777f",
      },
    },
  },
  plugins: [],
};
