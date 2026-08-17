/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-krona)', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a121c',
          light: '#f3f5f8',
          tint: '#eaf0f8',
          primary: '#0b63b8',
          secondary: '#cd0f1a',
          gray: '#6b7480',
        },
      },
    },
  },
  plugins: [],
};
