/* eslint-disable import/prefer-default-export */
const theme = {
  breakpoints: ['32em', '48em', '64em', '75em'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96],
  fontSizes: [8, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48],
  colors: {
    white: '#FFFFFF',
    primaryColor: '#333333',
    brandRed: '#9B1313',
    brandYellow: '#FBC000',
    brandBlue: '',
    textColor: '#000000',
    backgroundColor: '#333333',
    textGray: '#494849',
    black: '#000000',
    success: '#2CA42C',
    warning: '#FFB305',
    abandoned: '#48C8F0',
    gray: '#C4C4C4',
  },
  font: {
    primaryFont: 'Cinzel, serif',
    secondaryFont: 'Montserrat, sans-serif',
  },
  text: {
    paragraph: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: [3, 4],
      color: 'textColor',
      lineHeight: 1.7,
    },
    heading1: {
      fontFamily: 'Cinzel, serif',
      fontSize: [9, 10],
      fontWeight: 700,
      color: 'textColor',
    },
    heading2: {
      fontFamily: 'Cinzel, serif',
      fontSize: [8, 9],
      fontWeight: 500,
      // color: 'white',
    },
    heading6: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: [3, 4],
      fontWeight: 500,
      color: 'textColor',
      lineHeight: 1.7,
    },
    progress: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: [1],
      fontWeight: 500,
      color: 'black',
      lineHeight: 1.7,
    },
  },
  buttons: {
    link: {
      cursor: 'pointer',
      backgroundColor: 'transparent',
      paddingX: '0',
      paddingY: '0',
      '&:hover': {
        color: '#FBC000',
      },
    },
  },
};

export default theme;
