/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#385185",
          secondary: "#0095F6",
          accent: "#FAFAFA",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [require("daisyui") , require('flowbite/plugin')],
}
