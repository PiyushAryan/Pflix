/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Cinzel: ["Cinzel", "serif"],
        Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}
};