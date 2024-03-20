/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "mio-",
  content: ["../ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
