/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // If you're using Vite, this scans all your React files
  ],
  darkMode: 'class', // Forces class-based dark mode
  theme: {
    extend: {
      // Optional: if you wanna extend font, colors, whatever
      colors: {
        // Custom colors if needed
      },
      backgroundImage: {
        'custom-bg': 'var(--bg-grad)',
        'text-grad': 'var(--text-grad)',
      },
    },
  },
  plugins: [],
}
