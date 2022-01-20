module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2BA4DC',
          700: '#008ECF',
          900: '#0D4D80',
        },
        state: {
          info: '#2BA4DC',
          success: '#5DB22C',
          warning: '#F6C700',
          error: '#FC476A',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      height: {
        18: '70px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
