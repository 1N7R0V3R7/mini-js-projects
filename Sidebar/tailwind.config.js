module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        coreBlue: '#529CEB',
        hoverBlue: '#8DC6FB',
        logoBlue: '#222222',
        backgroundWhite: '#F1F5F8',
        crossRed: '#C20018'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif']
      },
      keyframes: {
        growShrink: {
          '0%, 33%': { transform: 'scale(0.75)' },
          '33%, 66%': { transform: 'scale(1.25)' },
          '66%, 100%': { transform: 'scale(0.75)' },
        }
      },
      animation: {
        growShrink: 'growShrink 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}