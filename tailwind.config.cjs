/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        "on-dark": "#e2e2e5",
        "off-dark": "#2a2a2a",

        light: "#fcfcff",
        "on-light": "#1a1c1e",
        "off-light": "#bebebe",

        primary: { dark: "#94ccff", light: "#006399" },
        "on-primary": { dark: "#003352", light: "#ffffff" },
        "primary-box": { dark: "#004b74", light: "#cde5ff" },
        "on-primary-box": { dark: "#cde5ff", light: "#001d32" },

        "deep-sky": "#041621",

        secondary: { dark: "#6adbae", light: "#006c4e" },
        "on-secondary": "#003827",
        "secondary-box": "#00513a",
        "on-secondary-box": "#87f8c9",

        surface: { dark: "#1a1c1e", light: "#f0f0f4" },
        "on-surface": { dark: "#e2e2e5", light: "#1a1c1e" },

        outline: { dark: "#8c9198", light: "#72787e" },

      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      }
    },
  },
  plugins: [],
};
