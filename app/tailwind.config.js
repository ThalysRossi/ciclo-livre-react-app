/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clRed: '#D6230C',
        clPink: '#FFECF0',
        clGrey: '#F4F4F4',
        clParadisePink: '#EB4E6C'
      },
      scale: {
        '-100': '-1',
      }
    },
  },
  plugins: [],
}