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
    textColor: 'red',
    backgroundColor: '#141514',
    textGray: '#494849',
  },
  font: {
    primaryFont: 'Cinzel, serif',
    secondaryFont: 'Montserrat, sans-serif',
  },
  text: {
    paragraph: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: [3, 4],
      color: 'brand_red',
      lineHeight: 1.7,
    },
    heading1: {
      fontFamily: 'Cinzel, serif',
      fontSize: [9, 10],
      fontWeight: 700,
      color: 'white',
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
      color: 'white',
      lineHeight: 1.7,
    },
  },
  buttons: {
    link: {
      backgroundColor: 'transparent',
      paddingX: '0',
      paddingY: '0',
    },
  },
};

export default theme;
