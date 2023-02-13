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
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
