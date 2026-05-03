/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "#1F1F1F",
        input: "#1F1F1F",
        ring: "#525252",
        background: "#0A0A0A",
        foreground: "#EDEDED",
        primary: {
          DEFAULT: "#EDEDED",
          foreground: "#0A0A0A",
        },
        secondary: {
          DEFAULT: "#1F1F1F",
          foreground: "#EDEDED",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "#1F1F1F",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#EDEDED",
          foreground: "#0A0A0A",
        },
        popover: {
          DEFAULT: "#0A0A0A",
          foreground: "#EDEDED",
        },
        card: {
          DEFAULT: "#0A0A0A",
          foreground: "#EDEDED",
        },
        // SaaS Industrial Tokens
        industrial: {
          bg: '#0A0A0A',
          border: '#1F1F1F',
          text: '#EDEDED',
          muted: '#737373',
          accent: '#FFFFFF',
        }
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
