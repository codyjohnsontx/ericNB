/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1c1917",
          muted: "#44403c",
        },
        paper: {
          DEFAULT: "#fafaf9",
          soft: "#f5f5f4",
        },
        clay: {
          DEFAULT: "#a8a29e",
          deep: "#78716c",
        },
        cedar: {
          DEFAULT: "#57534e",
        },
        sage: {
          DEFAULT: "#4d7c6f",
          dark: "#3d6358",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(28, 25, 23, 0.06), 0 8px 24px rgba(28, 25, 23, 0.06)",
      },
    },
  },
  plugins: [],
};
