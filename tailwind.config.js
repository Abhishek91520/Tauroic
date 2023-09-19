/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'body': ["Poppins"],
      'body1': ["Open Sans"],
      
    },
    extend: {
      screens: {
        'sm': '640px',  // Small screens (default: 640px)
        'md': '768px',  // Medium screens (default: 768px)
        'lg': '1024px', // Large screens (default: 1024px)
        'xl': '1280px', // Extra-large screens (default: 1280px)
      },
      animation: {
        text: 'text 5s ease infinite',
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
