module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: '#142643',
        customWhite: '#F1F5F8'
      }
    },
    screens: {
      'xs': '320px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
