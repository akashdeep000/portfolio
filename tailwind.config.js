const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/theme/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./theme.config.{js,jsx,ts,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
    },
    extend: {
      colors: {
        dark: "#111",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray[300]"),
            '[class~="lead"]': { color: theme("colors.gray[400]") },
            a: { color: theme("colors.gray[100]") },
            strong: { color: theme("colors.gray[100]") },
            "ul > li::before": { backgroundColor: theme("colors.gray[700]") },
            hr: { borderColor: theme("colors.gray[800]") },
            blockquote: {
              color: theme("colors.gray[100]"),
              borderLeftColor: theme("colors.gray[800]"),
            },
            h1: { color: theme("colors.gray[100]") },
            h2: { color: theme("colors.gray[100]") },
            h3: { color: theme("colors.gray[100]") },
            h4: { color: theme("colors.gray[100]") },
            code: { color: theme("colors.gray[100]") },
            "a code": { color: theme("colors.gray[100]") },
            pre: {
              color: theme("colors.gray[200]"),
              backgroundColor: theme("colors.gray[800]"),
            },
            thead: {
              color: theme("colors.gray[100]"),
              borderBottomColor: theme("colors.gray[700]"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray[800]") },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["class", 'html[class~="dark"]'],
};
