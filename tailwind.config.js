/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headingFirst: "#010f1c",
        headingSecondary: "#21d35"
      },
      container:{
        center: true,
        padding: "15px"
      }
    },
    fontFamily:{
      primary: "Poppins",
      secondary: "Pacifico"
    }
  },
  plugins: [],
}