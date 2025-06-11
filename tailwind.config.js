// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adicionamos .jsx e outras extensões comuns aqui
    "./*.{html,js,jsx,ts,tsx,css}"     // Adicionamos .jsx e outras extensões comuns aqui (se tiver arquivos JSX na raiz)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}