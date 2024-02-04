/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientBG': "url('/backgroundGradient.png')"
      },
      colors: {
        purplePrimary: "#291C3A",
        purpleSecondary: "#331C52",
        purpleTertiary: "812ID0",
        purpleTint: "#DCCFED",
        purpleFeint: "E1EBED"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
