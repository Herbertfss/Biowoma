import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ee',
          100: '#d5eed1',
          200: '#b4dfad',
          300: '#8dc281',
          400: '#63a459',
          500: '#3e8538',
          600: '#2f6a2d',
          700: '#265326',
          800: '#234822',
          900: '#203f1f',
        },
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
