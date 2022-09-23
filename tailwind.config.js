/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#100720",
        secondary: "#1A4D2E",
        accent: "#FF9F29",
        whiteish: "#FAF3E3",
        textColor: "#EEEEEE",
      },
      boxShadow: {
        customBoxShadow: "0 2px 20px rgba(26, 77, 46, 67%)",
      },
    },
  },
  plugins: [],
};
