/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        colblue: '#1DA1E5',
        colyellow: '#E6EB2E',
        colblack: '#000',
        overlay: '#00000054',
      },
      fontSize: {
        sicon: '1.5rem'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}