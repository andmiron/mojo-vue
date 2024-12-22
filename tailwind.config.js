/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'auth-form': '0 0 30px -5px rgba(16, 185, 129, 0.5)',
      },
    },
  },
  plugins: [],
}
