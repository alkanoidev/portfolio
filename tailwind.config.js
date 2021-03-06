module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        bg: {
          DEFAULT: "#f5f5f5",
          dark: "#121212",
        },
        off: {
          dark: "#212121",
          white: "#e6e6e6",
        },
        primary: "#68af73",
        secondary: "#62aeef",
        accent: "#e06b74",
        lineColor: {
          DEFAULT: "rgba(30, 45, 61, 1)",
          dark: "rgba(234, 234, 234, 1)",
        },
        blobColor1: "#55b6c2",
        blobColor2: "#98c379",
      },
      fontSize: {
        headline: "62px",
        subh: "32px",
        "icon-sm": "24px",
        body: "18px",
        labels: "16px",
        code: "14px",
      },
    },
  },
  plugins: [],
};
