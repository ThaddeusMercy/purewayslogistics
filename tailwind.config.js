/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c2eb',
          300: '#66a3e0',
          400: '#3385d6',
          500: '#0056B8', // Main primary color (blue)
          600: '#004da6',
          700: '#004494',
          800: '#003a82',
          900: '#003070',
          950: '#00255e',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Main secondary color
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        accent: {
          50: '#fff5e6',
          100: '#ffeacc',
          200: '#ffd699',
          300: '#ffc166',
          400: '#ffad33',
          500: '#FF6600', // New orange accent color
          600: '#e65c00',
          700: '#cc5200',
          800: '#b34700',
          900: '#993d00',
          950: '#803300',
        },
        lightBlue: '#D3F1FF', // New light blue color
      },
      fontFamily: {
        sans: ['Inter Display', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};