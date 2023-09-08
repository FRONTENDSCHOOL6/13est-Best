/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#68B0AB",
        secondary: "#2F6690",
      },
      fontFamily: {
        suit: ["SUIT Variable"],
      },
    },
  },
  plugins: [],
};
