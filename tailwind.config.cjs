/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        "off-dark": "#313131",
        primary: "#0369a1",
        secondary: "#0369a1",
        "deep-primary": "#01121B",
        "deep-emerald": "#021812"
      },
      backgroundImage: {
        gradient: "url('/assets/blurry-gradient-haikei.svg')",
        gradient1: "url('/assets/blurry-gradient-haikei1.svg')",
        gradient2: "url('/assets/blurry-gradient-haikei2.svg')",
      },
    },
  },
  plugins: [],
};
