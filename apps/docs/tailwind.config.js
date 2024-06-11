const tailwindConfig = require("@marica.io/style/tailwind.config.js");

const config = { ...tailwindConfig };

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    "./src/**/*.{njk,md,css}",
    "./eleventy.config.js",
    "./src/**/*.svg",
  ],
};
