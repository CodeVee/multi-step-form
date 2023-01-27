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
        'purplish-light': '#928cff',
        'pastel': '#adbeff',
        'light': '#bfe2fd',
        'deep': '#164a8a'
      },
      'red': {
        'strawberry': '#ed3548'
      },
      'gray': {
        'cool': '#9699ab',
        'light': '#d6d9e6'
      }
    },
    backgroundImage: {
      'sidebar-desktop': "url('assets/images/bg-sidebar-desktop.svg')",
      'sidebar-mobile': "url('assets/images/bg-sidebar-mobile.svg')"
    },
    extend: {
      spacing: {
        '1.6': '1.6rem',
        '3.2': '3.2rem',
        '4.8': '4.8rem'
      },
      borderRadius: {
        'bs': '0.8rem'
      },
      fontSize: {
        'sb': '1.4rem',
        'bs': '1.6rem'
      }
    },
  },
  plugins: [],
}
