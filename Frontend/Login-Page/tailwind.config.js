/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-light-gray": "#EFF0F2",
        "custom-dark-green": "#007074",
      },
    },
  },
  plugins: [],
};
