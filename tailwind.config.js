const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeOutUp: 'fadeOutUp .3s ease-in-out',
        fadeInDown: 'fadeInDown .3s ease-out-in'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        heading: ['Sen']
      },
      keyframes: {
        fadeOutUp: {
          from: { opacity: '1' },
          to: { transform: 'translate3d(0, -100%, 0)', opacity: 0 }
        },
        fadeInDown: {
          from: {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)'
          },
          to: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
