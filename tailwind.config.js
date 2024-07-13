/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151A20",
        secondary: "#DEB140",
        tertiary: "#DADBDD",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        sm: '640px',
        xs: "450px",
        '3xl': '1900px',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.png')",
        "hero-pattern-mobile":"url('/src/assets/background_mobile.png')",
      },
    },
  },
  plugins: [],
};