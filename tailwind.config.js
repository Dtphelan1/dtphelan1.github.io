const paperSize = "8.5in";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        resume: paperSize,
      },
      height: {
        resume: "11in",
      },
      maxWidth: {
        resume: paperSize,
      },
      maxHeight: {
        resume: "11in",
      },
      screens: {
        paper: paperSize,
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
