const colors = require("tailwindcss/colors");

const addDefault = (color, defaultColor) => {
  return { ...color, default: color[`${defaultColor}`] };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: addDefault(colors.yellow, 400),
      },
    },
  },
  plugins: [],
};
