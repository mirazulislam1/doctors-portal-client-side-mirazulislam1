/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  daisyui: {
    themes :[
      {
        myTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  },
  plugins: [require("daisyui")],
}
