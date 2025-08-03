/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        primary: {
          brown: '#2E1A0F',
          cream: '#F8F4E9',
          gold: '#D4A017',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#8B5A2B',
            h2: {
              color: '#2E1A0F',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#2E1A0F',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1rem',
              lineHeight: '1.75',
            },
            ul: {
              marginBottom: '1rem',
            },
            li: {
              marginBottom: '0.25rem',
            },
            strong: {
              color: '#2E1A0F',
              fontWeight: '600',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};