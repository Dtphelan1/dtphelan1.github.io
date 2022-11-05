const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        // sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "neutral-main": "#F3EDE1",
        primary: "#333d29",
        "primary-light": "#556944",
        "primary-ultra-light": "#A6C196",
        secondary: "#7F4F24",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
