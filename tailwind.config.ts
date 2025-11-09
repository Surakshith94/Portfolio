import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b12"
      },
      boxShadow: {
        glow: "0 0 80px 20px rgba(140, 90, 255, 0.35)"
      }
    }
  },
  plugins: []
};
export default config;
