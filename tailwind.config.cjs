/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        "off-dark": "#1A1A1A",
        "deep-sky": "#041621",
        "deep-emerald": "#021812",
        "deep-violet": "#120724"
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
