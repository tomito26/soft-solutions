import tailwindcssAnimate from "tailwindcss-animate"
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      "2xl": "1400px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1310px",
      "2xl": "1419px",
      "3xl":"1500px",
      "4xl": "1619px",
      "5xl":"1670px"
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "light-gray": "#CACCCF",
        tundora: "#444444",
        "active-blue": "#007EFF",
        "stroke-color": "#E3E5EA",
        monochrome: "#292929",
        "app-gray": "#C4C4C4",
        "inactive-blue": "#F3F9FF",
        "fair-blue": "#B2D8FF",
        "standard-blue": "#49A3FF",
        "secondary-info": "#A0A4A8",
        "body-gray": "#64696D",
        "default-black": "#25282B",
        "app-destructive": "#F40B0B",
        "destructive-light": "##F83737",
        "inactive-error": "#FEA0A0",
        "faint-error": "#F86666",
        monochromatic: "#101828",
        "nexus-gray": "#C6CCD6",
        "success-light": "#ECFDF3",
        success: "#1AB759",
        "success-100": "#D1FADF",
        "low-bg": "#F4F4F4",
        "light-motive": "#FAFAFB",
        "success-50": "#ECFDF3",
        "primary-dark": "#161616",
        "dark-green": "#0CA148",
        "inactive-warning": "#FFF1CF",
        "warning-dark": "#E89806",
        "seasoned-blue":"#85C0FD",
        "blaze-orange": "#FD5B08",
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
  plugins: [tailwindcssAnimate],
};
