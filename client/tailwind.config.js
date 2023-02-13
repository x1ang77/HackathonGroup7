/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        "8xl": "96rem",
        "9xl": "900px",
      },
      colors: {
        blue: "#163E61",
        white: "#FFFFFF",
        lightblue: "#F0F8FF",
        gray: "#8E8E8E",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
