/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        '2widest': '0.2em',    // A wider spacing
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fly': 'fly 3s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      screens: {
        'xs': '280px', // Custom breakpoint for iPhone 13
      },
      fontFamily: {
        calibre: ['Calibre', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

