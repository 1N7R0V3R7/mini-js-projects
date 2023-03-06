module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        mochiy: ['"Mochiy Pop P One"']
      },
      colors: {
        customBlack: '#222222'
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
