/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/index.css', './index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        newport: {
          200: '#cce8f6',
          300: '#b3dcf1',
          400: '#99d0ed',
          500: '#80c4e8',
          600: '#66b9e3',
          700: '#4daddf',
          800: '#33a1da',
          900: '#1d89d2',
        },
        enigma: {
          200: '#E2E4E6',
          300: '#D3D7DA',
          400: '#C4C9CE',
          500: '#B6BCC1',
          600: '#A7AEB5',
          700: '#98A1A9',
          800: '#8a939c',
          900: '#7f7679',
        },
        tangerine: {
          200: '#FFECD0',
          400: '#FFD8A2',
          600: '#FFC573',
          800: '#FFB145',
          900: '#FF9E16',
        },
        nero: {
          200: '#BFBFBF',
          400: '#989898',
          600: '#737373',
          800: '#4C4C4C',
          900: '#202020',
        },
      },
    },
  },
  plugins: [],
}

