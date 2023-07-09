/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homehero: "url('/src/assets/background.avif')",
        background: "url('/src/pages/homepage/background.png')",
        pattern: "url('/src/pages/homepage/pattern.png')",
        bg1: "url('/src/pages/homepage/bg.png')",
        bg2: "url('/src/pages/homepage/bg1.png')",
        bg3: "url('/src/pages/homepage/bg2.png')",
        blackseed: "url('/src/pages/homepage/blackseeds.jpeg')",
        magnesium: "url('/src/pages/homepage/mag.webp')",
        colloidal: "url('/src/pages/homepage/droper.webp')",
      },
    },
  },
  plugins: [],
};
