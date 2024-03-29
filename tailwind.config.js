const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: colors.gray,
  //     },
  //   },
  // },
  safelist: [
    {
      pattern: /grid-cols-.+/,
    },
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
