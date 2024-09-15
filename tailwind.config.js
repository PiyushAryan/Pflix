/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
    'netflix':'#E50914',
  },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Cinzel: ["Cinzel", "serif"],
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        
    },
  },
  plugins: [],

}
};