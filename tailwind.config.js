module.exports = {
  theme: {
    extend: {
      colors: {
        neon: "#5af6f2"
      }
    }
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"]
  },
  plugins: [require("@tailwindcss/ui")]
};
