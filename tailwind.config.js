/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      primary_bg: '#d3d3d3',
      secondary_bg: '#383838',
      cta_color : '#BAFF39',
      color : '#fff'
      // ...
    }
  },
  plugins: [],
}

