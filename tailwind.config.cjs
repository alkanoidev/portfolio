/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        "on-dark": "#e2e2e5",
        "off-dark": "#2a2a2a",

        primary: "#94ccff",
        "on-primary": "#003352",
        "primary-box": "#004b74",
        "on-primary-box": "#cde5ff",

        "deep-sky": "#041621",

        secondary: "#6adbae",
        "on-secondary": "#003827",
        "secondary-box": "#00513a",
        "on-secondary-box": "#87f8c9",

        surface: "#1a1c1e",
        "on-surface": "#e2e2e5",

        outline: "#8c9198"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      }
    },
  },
  plugins: [],
};
