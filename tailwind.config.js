/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',    
          gold: '#c5a059',    
          surface: '#f8fafc', 
        }
      },
    },
  },
  plugins: [],
}