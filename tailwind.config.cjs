/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#CBD2F1',
          'main-dark-bg': '#121212',
          'secondary-dark-bg': '#29293D',
          'light-gray': '#CBD2F1',
          'dark-grey': '#272727',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          'light-purple':'#8787d3',
          'dark-purple':'#4f4f77'
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('./src/data/images/charts-header.png')",
        },
      },
    },
    plugins: [],
  };