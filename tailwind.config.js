/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0A1628',
        'alt-bg': '#0D1F3C',
        'gold': '#C9A227',
        'primary-text': '#FFFFFF',
        'secondary-text': '#A8B8D0',
        'teal': '#0F766E',
        'crimson': '#991B1B',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'amiri': ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
