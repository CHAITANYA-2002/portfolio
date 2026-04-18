/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0F',
        foreground: '#FFFFFF',
        muted: '#A1A1AA',
        surface: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
}
