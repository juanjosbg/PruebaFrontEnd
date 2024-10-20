/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,html,mdx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'TextGreenTitle': '#1e5e30',
        'TextYellowTitle': '#f9bc60',
        'Txt-Span-Green': '#74b480',
        
        'bg-green': "#96dfa5",
        'bg-green1': "#61c775",
        'bg-green2': "#3bac52",
        'bg-green3': "#28803a",
        'bg-green4': "#266f35",
        'bg-green5': "#1a3c25",
        'bg-green6': "#22592e",
        'bg-green7': "#1e4928",

        'bg-Gris': '#c0c0c0',

        'bg-buttom1': '#9fd6aa',
        'bg-buttom2': '#efa248',
        'bg-buttom3': '#f3f4f6',

        'verde1': '#606C38',
        'verde2': '#283618',
        'cornsilk': '#FEFAE0',
        'earthYellow': '#DDA15E',
        'tiggerYellow': '#BC6C25',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Añadiendo el plugin de Flowbite
  ],
}
