export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
extend: {
  animation: {
    glow: "glow 2s ease-in-out infinite alternate",
  },
  keyframes: {
    glow: {
      from: { textShadow: "0 0 10px #ff4ecd" },
      to: { textShadow: "0 0 20px #ff9af5" },
    },
  },
},

  },
  plugins: [],
}
