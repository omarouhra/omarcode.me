/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand_purple_dark: "#14121A",
        brand_purple: "#33142A",
        brand_gray: "#C5C5C5",
      },
    },
  },
  plugins: [],
};
