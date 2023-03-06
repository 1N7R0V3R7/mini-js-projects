module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        backgroundWhite: '#F1F5F8',
        darkBlue: '#142643',
        lightBlue: '#0CD4D6',
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
