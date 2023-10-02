/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        magnesium: "url('/src/pages/homepage/mag.webp')",
        colloidal: "url('/src/pages/homepage/droper.webp')",
        shopbg: "url('/src/pages/shop/shopbg.jpg')",
        logoImg: "url('/src/components/header.JPG')",
      },
      colors: {
        colourOne: "#d7d7d7",
        colourTwo: "#765c46",
        colourThree: "#302723",
        colourFour: "#9f9891",
        colourFive: "#c0a77d",
      },
    },
  },
  plugins: [],
};
