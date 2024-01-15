/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "primary" : "#0A192F",
        "secondary" : "#F97316",
        "tertiary" : "#54D6BB"
      }
    },
    screens: {
      'lg': {'max': '1023px'},
    
      'sm': {'max': '773px'},

    }
  },
  plugins: [],
}