/** @type {import('tailwindcss').Config} */
module.exports = {
  //  add custom typograpghy and utilities here for help visit https://tailwindcss.com/docs/installation

  // NB when you make changes to this file you might have to restart the server

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        secondary: '#182C32',
        tertiary: '#007400',
        cards: ' #E9E9E9',
        'black-sub': 'rgba(75, 75, 75, 1)',
      },
      fontFamily: {
        mulish: ['mulish'],
      },
    },
  },
  variants: {
    extend: {
      display: ['peer-hover'],
    },
  },

  // plugins: [require('flowbite/plugin')],
};
