/* eslint-disable import/prefer-default-export */
const theme = {
  breakpoints: ['32em', '48em', '64em', '75em'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96],
  fontSizes: [8, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48],
  colors: {
    white: '#FFFFFF',
    brand_red: '#9B1313',
    brand_yellow: '',
    brand_blue: '',
    text_color: 'red',
    background_color: '',
  },
  font: {
    primary_font: '',
    secondary_font: '',
  },
  text: {
    paragraph: {
      fontSize: [3, 4],
      color: 'brand_red',
    },
    h1: {
      fontSize: [9, 10],
      color: 'white',
    },
    h6: {
      fontSize: [3, 4],
      fontWeight: 700,
      color: 'white',
    },
  },
};

export default theme;
