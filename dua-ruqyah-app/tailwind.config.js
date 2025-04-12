/** @type {import('tailwindcss').Config} */


  module.exports = {
    darkMode: 'class',
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      './src/styles/**/*.{css}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
          mono: ['Fira Code', 'monospace'],
        },
      },
    },
    plugins: [],
  };
  