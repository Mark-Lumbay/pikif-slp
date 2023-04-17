/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBtn: "#236576",
        primaryHovBtn: "#1c515e",
      },
    },
  },
  plugins: [],
};
