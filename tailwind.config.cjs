/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{svelte,js,ts,html}",
    "./src/components/*.svelte"
  ],
  theme: {
    extend: {
      colors:{
        brandDark:"#2E2E2E",
        brandDarkBrown:"#4C3B1F",
        brandBrown:"#A67C52",
        brandCream:"#F8D6C1",
        brandAlmond:"#F0E0D1"
      },
      backgroundImage:{
        "hero":"url(/src/assets/cups.jpg)"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  }
}
