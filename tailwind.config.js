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
        primary: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(to bottom right, #3B82F6, #8B5CF6)',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
}
