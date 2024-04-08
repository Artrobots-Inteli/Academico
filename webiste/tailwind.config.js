const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: ["./src/**/*.{jsx,js,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
      },
      borderRadius: {
      },
      screens: {
      },
      colors: {},
    },
  },
  plugins: [],
};