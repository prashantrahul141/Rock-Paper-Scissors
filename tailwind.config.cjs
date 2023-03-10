/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        secularOne: ['Secular One'],
        bebasNeue: ['Bebas Neue'],
        inconsolata: ['Inconsolata'],
      },
      colors: {
        themePrimary: {
          50: '#dbeaff',
          100: '#abcefd',
          200: '#7cb2fa',
          300: '#5197f5',
          400: '#2d7fee',
          500: '#0f6ae6',
          600: '#005cdb',
          700: '#0055cd',
          800: '#004cbc',
          900: '#0041a9',
          1000: '#003192',
          1100: '#001a7a',
          1200: '#000561',
          1300: '#00021f',
        },
      },
    },
  },
  plugins: [],
};
