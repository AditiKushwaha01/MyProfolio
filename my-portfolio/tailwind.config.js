/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spaceDark: "#0a0a1a",
        spaceGrey: "#111827",
        starGlow: "#facc15",
        neonBlue:"#38bdf8",
        nebulaPink: "#e879f9",
        electricPurple: "#9333ea",
        softWhite:"#f8fafc",
        vibrantBlue:"#3b82fe",
      }
    },
  },
  plugins: [],
}

