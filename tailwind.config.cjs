const exColors = {
  dark: {
    800: '#28232F',
    900: '#100E13',
  },
  firmcolor: '#EE2759',
  gold: '#FFC530',
  purple: '#7327EE',
  acidic: '#CBCB15',
  grey: '#6A6373',
  ice: '#3581DB',
  neutral: '#F9F3DE',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      size: {
        inner: '1060px',
      },
      fontSize: {
        xsm: '0.75rem',
      },
      colors: {
        ex: exColors,
        ui: {
          separator: exColors.dark['800'],
        },
        text: {
          base: exColors.neutral,
        },
      },
      fontFamily: {
        sans: ['Unbounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
