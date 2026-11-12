import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#D4AF37",
  "secondary": "#0F0F0F",
  "accent": "#1A1A1A",
  "background": "#0F0F0F",
  "surface": "#1A1A1A",
  "ink": "#FFFFFF",
  "muted": "#A3A3A3",
  "dark": "#0F0F0F"
},
      fontFamily: {
  "heading": [
    "Playfair Display",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
