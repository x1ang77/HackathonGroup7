/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        colors: {
            blue: "#163E61",
        },
        extend: {
            width: {
                "8xl": "96rem",
                "9xl": "900px",
            },
        },
=======
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      blue: "#163E61",
      white: "#FFFFFF",
      lightblue: "#F0F8FF",
      gray: "#8E8E8E",
>>>>>>> 7418848acbf99b48dcd39c373a7628cea9b424a1
    },
    plugins: [require("tw-elements/dist/plugin")],
};
