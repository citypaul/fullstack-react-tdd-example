/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
  content: [
    path.resolve(__dirname, "./apps/frontend/src/**/*.{js,jsx,ts,tsx}"),
    path.resolve(__dirname, "./packages/**/*.{js,jsx,ts,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
