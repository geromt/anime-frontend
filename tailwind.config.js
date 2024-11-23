/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background-color': "var(--background-color)",
      'primary': "var(--primary-color)",
      'secondary': "var(--secondary-color)",
    },
    fontFamily: {
      holtwood: ["Holtwood One SC", "serif"],
    },
  },
  plugins: [],
}
