module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Existing color combinations
        'dark-blue-lemon-yellow': {
          darkBlue: '#172A3A',
          lemonYellow: '#F3C623',
        },
        'cherry-red-off-white': {
          cherryRed: '#E63946',
          offWhite: '#F1FAEE',
        },
        'dark-blue-light-blue': {
          darkBlue: '#2B2D42',
          lightBlue: '#8D99AE',
        },
        'terracotta-red-beige': {
          terracottaRed: '#D00000',
          beige: '#F9F7F7',
        },
        'salmon-pink-lilac': {
          salmonPink: '#FF9AA2',
          lilac: '#B5EAEA',
        },
        'dark-green-ivory-yellow': {
          darkGreen: '#003049',
          ivory: '#EAE2B7',
          yellow: '#F77F00',
        },
        'dark-grey-yellow-green': {
          darkGrey: '#2B2D42',
          yellowGreen: '#8D99AE',
        },
        'beige-dark-grey': {
          beige: '#F9F7F7',
          darkGrey: '#2B2D42',
        },
        // Additional colors
        customBlue: '#007BFF', // Replace with your desired blue color
        pastelPink: '#FFB6C1', // Replace with your desired pastel pink color
      },
      animation: {
        'fade-in-down': 'fade-in-down 3s ease-out',
        'fade-in-up': 'fade-in-up 3s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'hover-bounce': 'hover-bounce 1s infinite',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'hover-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
