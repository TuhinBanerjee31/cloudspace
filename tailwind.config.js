/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        'header-img': "url('/src/assets/header_img.jpg')",
        'header-img2': "url('/src/assets/header_img2.jpg')",
      }
    },
  },
  plugins: [],
};
