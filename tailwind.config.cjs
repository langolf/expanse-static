const exColors = {
  dark: {
    700: '#242128',
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
  green: '#26B478',
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
      fontFamily: {
        sans: ['Unbounded Variable', 'sans-serif'],
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
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
};
