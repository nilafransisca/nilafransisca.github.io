/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#d63384", dark: "#b02a6d" },
      },
      // Page width shared by the navbar, content and footer (`max-w-page`).
      maxWidth: {
        page: "76rem", // 1216px
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Used by the Home hero: badges bob up and down, the dashed ring turns slowly.
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
