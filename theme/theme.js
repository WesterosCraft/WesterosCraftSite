/* eslint-disable import/prefer-default-export */
const theme = {
  breakpoints: ['32em', '48em', '64em', '75em'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96],
  fontSizes: [8, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48],
  colors: {
    white: '#FFFFFF',
    brand_red: '#9B1313',
    brand_yellow: '#FBC000',
    brand_blue: '',
    text_color: 'red',
    background_color: '#141514',
  },
  font: {
    primary_font: 'Cinzel, serif',
    secondary_font: 'Montserrat, sans-serif',
  },
  text: {
    paragraph: {
      fontSize: [3, 4],
      color: 'white',
      lineHeight: 1.7,
    },
    heading1: {
      fontFamily: 'Cinzel, serif',
      fontSize: [9, 11, 12],
      fontWeight: 700,
      color: 'white',
    },
    heading2: {
      fontFamily: 'Cinzel, serif',
      fontSize: [9, 10],
      fontWeight: 700,
      color: 'white',
    },
    heading6: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: [3, 4],
      fontWeight: 500,
      color: 'white',
      lineHeight: 1.7,
    },
  },
};

export default theme;
