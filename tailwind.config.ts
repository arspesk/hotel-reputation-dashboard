import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          // Primary Blues
          primary: '#195c8c',
          'primary-light': '#3d779f',
          'primary-lighter': '#6493b3',
          // Neutrals
          dark: '#061332',
          bg: '#faf9f6',
          border: '#ebecef',
          'border-medium': '#e6e7ea',
          muted: '#acb0ba',
          // Status
          success: '#2eab6e',
          error: '#e23c00',
          warning: '#ff9520',
          // Decorative
          'accent-warm': '#ef786a',
          'accent-light': '#f8dab7',
          'accent-cool': '#3d8c8d',
        },
      },
      fontFamily: {
        sans: ['TT Norms Pro', 'Inter', 'helvetica', 'arial', 'sans-serif'],
        serif: ['Tiempos Headline', 'baskerville', 'palatino', 'georgia', 'serif'],
      },
      borderRadius: {
        brand: '12px',
        'brand-sm': '8px',
        'brand-lg': '16px',
      },
      spacing: {
        'brand-button': '3rem',
        'brand-button-md': '2.5rem',
        'brand-button-sm': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
