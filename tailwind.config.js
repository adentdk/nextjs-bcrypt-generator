// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  // Active dark mode on class basis
  darkMode: 'class', // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
