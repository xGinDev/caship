/** @type {import('tailwindcss').Config} */
import { tailwind } from "./constants";
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: tailwind,
  },
  plugins: [],
};
