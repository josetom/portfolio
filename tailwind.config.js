const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  // theme: {
  //   extend: {
  //     colors: {
  //       teal: colors.teal,
  //       cyan: colors.cyan,
  //     },
  //   },
  // },
  safelist: [
    {
      pattern: /grid-cols-.+/,
    },
  ],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
