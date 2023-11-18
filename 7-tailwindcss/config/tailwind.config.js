/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html","about.html","form.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      fontFamily: {
        heading: ["Lora", "serif"],
        code: ["Ubuntu Mono", "serif"],
      },

      colors: {
        "primary-400": "#6c9fff",
        "primary-500": "#377dff",
        "primary-600": "#0050e6",
      },
      spacing: {
        dd: "50px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
