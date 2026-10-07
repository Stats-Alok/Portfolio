/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF7F2',
          150: '#F3EFE6',
          200: '#EBE5D8',
          300: '#DDD5C4',
          400: '#C5B9A4',
          card: '#FFFDF9',
          border: '#E6DFD1',
        },
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B9DDFF',
          300: '#7CC2FF',
          400: '#36A2FF',
          500: '#0C84EB',
          600: '#0066C7',
          700: '#0051A1',
          800: '#034585',
          900: '#083B6F',
        },
        surface: {
          50: '#FAF7F2',
          100: '#F3EFE6',
          200: '#E6DFD1',
          300: '#D8CFBF',
          card: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(70, 50, 20, 0.04), 0 1px 2px 0 rgba(70, 50, 20, 0.02)',
        'card': '0 4px 6px -1px rgba(70, 50, 20, 0.04), 0 2px 4px -1px rgba(70, 50, 20, 0.02)',
        'card-hover': '0 10px 15px -3px rgba(70, 50, 20, 0.07), 0 4px 6px -2px rgba(70, 50, 20, 0.03)',
        'elevated': '0 20px 25px -5px rgba(50, 35, 15, 0.08), 0 10px 10px -5px rgba(50, 35, 15, 0.04)',
      },
    },
  },
  plugins: [],
}
