/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light theme colors
        light: {
          bg: '#FFFFFF',
          'bg-secondary': '#F8FAFC',
          'bg-tertiary': '#F1F5F9',
          primary: '#1E293B',
          secondary: '#64748B',
          accent: '#6366F1',
          'accent-hover': '#4F46E5',
          'accent-secondary': '#10B981',
          border: '#E2E8F0',
          success: '#10B981',
          error: '#EF4444',
        },
        // Dark theme colors (your specified colors)
        dark: {
          bg: '#0D1117',
          'bg-secondary': '#161B22',
          'bg-tertiary': '#1E1E1E',
          primary: '#E5E7EB',
          secondary: '#9CA3AF',
          accent: '#6366F1',
          'accent-hover': '#818CF8',
          'accent-secondary': '#10B981',
          border: '#2D333B',
          success: '#34D399',
          error: '#F87171',
        }
      },
    },
  },
  plugins: [],
};