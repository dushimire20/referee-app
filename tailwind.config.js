/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FFFFFF",
        
            
        "secondary-100": "#881337",
       
        
        "gray-100": "#000000",
        "gray-200": "#475569"
        
        
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },

      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
  
      },
    },

  },
  plugins: [],
}