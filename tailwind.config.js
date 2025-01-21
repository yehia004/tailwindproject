/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // اسم الخط وإعداد النسخ الاحتياطية
      },
        sans: ['Comfortaa', 'sans-serif'],
      colors: {
        brandYellow: '#FFC107',
        brandGray: '#F9FAFB',
      },
    },
  },
  
  plugins: [],
}