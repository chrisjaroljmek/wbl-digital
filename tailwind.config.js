/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#16171A",
        green: "#8CF507",
        blue: "#36FFD6",
        darkBlue: "#3118FF",
        red: "#b53523",
        orange: "#FF9A01",
        grey: "#B9B9B9",
      },
    },
  },
  plugins: [],
};
