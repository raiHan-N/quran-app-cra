/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Noto Naskh Arabic", "serif"],
      },
      colors: {
        light: "#F6F6F6",
        primary: "#5CB8E4",
        secondary: "#8758FF",
        lightdark: "#8D8D8D",
        card_dark: "#172343",
        dark: "#211F1F",
        primary_dark: "#356379",
      },
    },
  },
  plugins: [],
};
