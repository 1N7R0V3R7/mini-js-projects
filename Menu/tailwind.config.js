const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        backgroundWhite: '#F1F5F8',
        golden: '#C4A25B',
        logoBlue: '#142643',        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif']
      },
    },
    screens: {
      'xs': '440px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
