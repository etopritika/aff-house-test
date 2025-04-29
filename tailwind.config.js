/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#541cae',
      secondary: '#96909c',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      secondary: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
