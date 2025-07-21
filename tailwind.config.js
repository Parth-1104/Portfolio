/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
          outfit: ['Outfit', 'sans-serif'],
          playfair: ['Playfair', 'serif'],
          saira: ['Saira', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  