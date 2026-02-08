/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ← important: tells Tailwind where to look for classes
  ],
  theme: {
    extend: {
      // Example customizations (add later if needed)
      // colors: { primary: '#4f46e5' },
      // fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}