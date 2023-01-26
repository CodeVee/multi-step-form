/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'mangolia': '#f0f6ff',
      'alabaster': '#fafbff',
      'blue': {
        'marine': '#02295a',
        'purplish': '#473dff',
        'pastel': '#adbeff',
        'light': '#bfe2fd'
      },
      'red': {
        'strawberry': '#ed3548'
      },
      'gray': {
        'cool': '#9699ab',
        'light': '#d6d9e6'
      }
    },
    extend: {
      spacing: {
        1.6: '1.6rem'
      }
    },
  },
  plugins: [],
}
