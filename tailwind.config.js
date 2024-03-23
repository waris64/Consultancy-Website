/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkorange:'#d2734f',
        bgDark:'#1f1f1f',
        bgLight:'#2f2f2f'
      }
    },
  },
  plugins: [],
}