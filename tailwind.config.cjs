/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#019dff",
        secondary: "#3862e1",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
