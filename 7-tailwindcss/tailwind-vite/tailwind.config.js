/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./src/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};
