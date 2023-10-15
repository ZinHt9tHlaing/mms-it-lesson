/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        para: ["Montserrat", "sans-serif"],
        heading: ["Young Serif", "serif"],
        code: ["Fragment Mono", "monospace"],
      },
      colors: {
        primary: "#377dff",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
