/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E04343',
        secondary: '#FFE800',
        dark: '#353535',
        light: '#f3f5f8',
      },
    },
  },
  plugins: [],
}

