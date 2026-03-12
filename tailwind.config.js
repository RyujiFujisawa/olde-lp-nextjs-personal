/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff9e8',
          100: '#fff2c4',
          200: '#ffe483',
          300: '#ffd142',
          400: '#ffbf1f',
          500: '#f4b400',
          600: '#d28a00',
          700: '#a76108',
          800: '#6e430d',
          900: '#39240a',
        },
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)',
        panel: '0 12px 36px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(255, 211, 66, 0.28), transparent 28%), radial-gradient(circle at bottom left, rgba(255, 191, 31, 0.16), transparent 30%)',
      },
    },
  },
  plugins: [],
}
