/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E3A8A", // Dark Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#A7C7E7", // Light Blue
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F4F4F4", // Soft Gray
          foreground: "#333333",
        },
        accent: {
          DEFAULT: "#2ECC71", // Emerald Green
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Professional color palette
        darkblue: {
          DEFAULT: "#1E3A8A", // Dark Blue - Primary
          light: "#3151A6",
          dark: "#152C6B",
        },
        teal: {
          DEFAULT: "#008080", // Teal - Primary
          light: "#00A3A3",
          dark: "#006666",
        },
        lightblue: {
          DEFAULT: "#A7C7E7", // Light Blue - Secondary
          light: "#C5DAEF",
          dark: "#89B4DF",
        },
        softgray: {
          DEFAULT: "#F4F4F4", // Soft Gray - Secondary
          light: "#FFFFFF",
          dark: "#E0E0E0",
        },
        emerald: {
          DEFAULT: "#2ECC71", // Emerald Green - Accent
          light: "#4CD787",
          dark: "#25A25A",
        },
        orange: {
          DEFAULT: "#E67E22", // Deep Orange - Accent
          light: "#F39C12",
          dark: "#D35400",
        },
        charcoal: {
          DEFAULT: "#333333", // Charcoal Gray - Text
          light: "#555555",
          dark: "#222222",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

