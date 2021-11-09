module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F8FCF',
          dark: '#0D4D80',
        },
        state: {
          success: '#52c41a',
          warning: '#faad14',
          error: '#f5222d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
