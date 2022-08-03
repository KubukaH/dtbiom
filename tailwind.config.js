module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};