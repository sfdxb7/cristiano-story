/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Playfair Display', 'serif'],
        'sans-clean': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Chapter color themes
        madeira: {
          50: '#fef7f0',
          100: '#fdebd1',
          200: '#fbd4a3',
          300: '#f8b76a',
          400: '#f4942e',
          500: '#f17a0f',
          600: '#e25c05',
          700: '#bb4308',
          800: '#95350e',
          900: '#7a2e0f',
        },
        sporting: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bbe5cd',
          300: '#8bd0ac',
          400: '#55b585',
          500: '#319968',
          600: '#237b52',
          700: '#1d6344',
          800: '#194f37',
          900: '#15412e',
        },
        madrid: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(0, 0, 0, 0.1)',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'kinetic': 'kinetic 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(241, 122, 15, 0.5)' },
          to: { boxShadow: '0 0 30px rgba(241, 122, 15, 0.8)' }
        },
        kinetic: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) rotate(1deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-0.5deg)' }
        }
      }
    },
  },
  plugins: [],
}