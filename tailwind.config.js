/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    white: "#ffffff",
    black: "#000000",
    pharosBlue: "#006E61", // mix of Pharos and Nigeria
    pharosGold: "#FBBF24", // gold accent
    nigeriaGreen: "#008751", // national green
    darkBg: "#0D1117", // dark background
    lightText: "#E5E7EB", // light gray text
  },
},

  },
  plugins: [],
}
