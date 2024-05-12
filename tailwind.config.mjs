/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        spacecadet: "#2D314D",
        mountainmeadow: "#30C88F",
        batteryblue: "#2AB6D9",
        manatee: "#9597A5",
        culturedwhite: "#F4F5F7",
        lotionwhite: "#FAFAFA",
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
