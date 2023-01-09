/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand_purple_dark: "#14121A",
        brand_purple: "#33142A",
        brand_gray: "#C5C5C5",
      },

      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
