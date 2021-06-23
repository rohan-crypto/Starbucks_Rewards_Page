module.exports = {
  mode: 'jit',
  purge: ['./*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1440px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '782px'},
      'sm': {'max': '639px'},
    },
    extend: {
      colors: {
        'starbucks': '#008248',
        'grayish': '#d4e9e2',
        'darkGreen': '#1e3932',
        'gold': '#D1B000',
        'goldDark': '#AC8F00',
        'lightGrayish': '#f1f8f6',
        'offwhite': '#f3f1e7',
      },
      boxShadow: {
        bottom: 'inset 0px -6px #008248',
        bottom2: 'inset 0px -4px #008248',
      },
      maxWidth: {
        '8xl': '90rem',
        '7.5': '30rem',
        '4.75': '19rem',
        '4.125': '16.5rem',
       },
      minWidth: {
        '1/6': '16.66%',
       },
      width: {
        '1/6': '16.66%',
        '98/100': '98%',  
        '93/100': '93%',
       },
       margin: {
        38: '9.5rem',
      },
       padding: {
        '1/5': '20%',
        'full': '100%',
      },
      fontSize: {
        '0.22': '0.9rem'
      },
      
      backgroundImage: theme => ({
        'landing-page': "url('./Image/Star_Img.webp')",
      }),
      backgroundPosition: {
        '1/2': "50%",
        '4/5': "40% 100%",
      },
      backgroundSize: {
        'auto-100%': 'auto 100%',
        'auto-42%': 'auto 42%',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      divideColor: ['group-hover'],
      textDecoration: ['active'],
    },
  },
  plugins: [],
}
