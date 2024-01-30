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
        "tertiary" : "#54D6BB",
        "fourth" : "#FFFFFF",
        "fifth" : "#000000",
        "sixth" : "#990000",
      }
    },
    screens: {
      'sm': '500px',

      'lg': {'max': '1024px'},
    
      'md': {'max': '1240px'},
      
    }
  },
  plugins: [],
}