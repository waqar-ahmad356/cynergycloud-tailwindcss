/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 70.583px 35.292px rgba(0, 0, 0, 0.03)', // Define custom shadow
      },
    },
  },
  plugins: [],
}