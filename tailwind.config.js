/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8c27b5',
        secondary: '#6a11cb',
        accent: '#f1c8ed',
        background: '#fff7ff',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 6px 12px rgba(0, 0, 0, 0.1)',
        'custom-xl': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}