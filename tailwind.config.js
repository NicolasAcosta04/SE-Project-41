/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'readex-pro': ['"Readex Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}