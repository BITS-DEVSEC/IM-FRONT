/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7E4005", // Your new brown color
          foreground: "#ffffff", // Text color on primary bg
        },
        // Optional: Define a darker shade for hover states
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... rest of your shadcn colors
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}