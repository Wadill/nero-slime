/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#1A1F2B",
        "neon-green": "#00FFA3",
        "deep-blue": "#2B3A67",
        "light-gray": "#D1D5DB",
      },
    },
  },
  plugins: [],
};