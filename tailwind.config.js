/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        slate: {
          100: '#E4F4FD',
          300: '#9ABED5',
          500: '#6B94A8',
          700: '#4E6E7E',
          900: '#133041'
        },
        lime: '#D8DB2F',
        red: '#D73328'
      }
    },
  },
  plugins: [],
}