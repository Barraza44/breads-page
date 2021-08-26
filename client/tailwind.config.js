module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': ['"Gowun Batang"', 'serif'],
      'secondary': 'Georama, sans-serif'
    },
    colors: {
      umber: {
        light: "hsl(0, 0%, 25%)",
        DEFAULT: "hsl(0, 0%, 15%)",
        dark: "hsl(0, 0%, 10%)"
      },
      pinky: {
        light: "hsl(347, 83%, 70%)",
        DEFAULT: "hsl(347, 83%, 60%)",
        dark: "hsl(347, 83%, 50%)"
      },
      grey: {
        light: "hsl(252, 3%, 80%)",
        DEFAULT: "hsl(252, 3%, 70%)",
        dark: "hsl(252, 3%, 60%)",
      },
      beige: {
        light: "hsl(34, 43%, 75%)",
        DEFAULT: "hsl(34, 43%, 65%)",
        dark: "hsl(34, 43%, 55%)",
      },
      marine: {
        light: "hsl(256, 52%, 60%)",
        DEFAULT: "hsl(256, 52%, 50%)",
        dark: "hsl(256, 52%, 70%)",
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
