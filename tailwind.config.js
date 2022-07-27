module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-main": "#F3EDE1",
        primary: "#333d29",
        secondary: "#7f4f24",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
