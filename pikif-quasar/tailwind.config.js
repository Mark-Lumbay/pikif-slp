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
        btnGreenHover: "#96bd65",
        primaryRed: "#ef777f",
        primaryRedHover: "#f1858c",
        primaryDark: "#163142",
        lightGray: "#cedfdb",
        navBar: "#16252d",
        sideBar: "#29353b",
        primaryYellow: "#f0ed1e",
      },
    },
  },
  plugins: [],
};
