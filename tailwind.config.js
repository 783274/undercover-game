/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Très important pour scanner vos fichiers React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
