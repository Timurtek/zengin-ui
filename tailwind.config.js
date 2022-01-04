const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", ...defaultTheme.fontFamily.sans, "sans-serif"],
        serif: ["Graphik", ...defaultTheme.fontFamily.serif, "serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
