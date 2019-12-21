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
    backgroundColor: '#FFFFFF',
    textGray: '#494849',
    black: '#000000',
    success: '#2CA42C',
    warning: '#FFB305',
    orphaned: '#48C8F0',
    gray: '#C4C4C4',
    gray2: '#231F20',
  },
  font: {
    primaryFont: 'Montserrat, sans-serif',
  },
  text: {
    paragraph: {
      fontSize: [2, 3],
      color: 'textColor',
      lineHeight: 1.5,
    },
    heading1: {
      fontSize: [9, 10],
      fontWeight: 700,
      color: 'textColor',
    },
    heading2: {
      fontSize: [8, 9],
      fontWeight: 500,
    },
    heading3: {
      fontSize: [5, 6],
      fontWeight: 500,
    },
    heading4: {
      fontSize: [5, 6],
      lineHeight: 1.5,
    },
    heading5: {
      fontSize: [4, 5],
    },
    heading6: {
      fontSize: [3, 4],
      fontWeight: 500,
      color: 'textColor',
      lineHeight: 1.7,
    },
    progress: {
      fontSize: [1],
      fontWeight: 500,
      color: 'black',
      lineHeight: 1.7,
    },
  },
  forms: {
    select: {
      borderRadius: 8,
      width: '100%',
      fontSize: 2,
      borderColor: 'gray',
      '&:focus': {
        boxShadow: '0 0 0 2px #9B1313',
        outline: 'none',
      },
    },
    input: {
      borderRadius: 8,
      width: '100%',
      fontSize: 2,
      borderColor: 'gray',
      '&:focus': {
        boxShadow: '0 0 0 2px #9B1313',
        outline: 'none',
      },
    },
    textarea: {},
    label: {},
    radio: {},
    checkbox: {},
  },
  buttons: {
    primary: {
      backgroundColor: 'brandRed',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      paddingY: '4',
      paddingX: '6',
      transition: 'all 150ms ease-out 0s',
      '&:hover': {
        transform: 'translate3d(0px, -2px, 0px)',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px',
      },
      '&:focus': {
        transform: 'translate3d(0px, 0px, 0px)',
        boxShadow: 'rgba(255, 71, 133, 0.4) 0px 1px 9px 2px',
      },
    },
    link: {
      backgroundColor: 'transparent',
      paddingX: '0',
      paddingY: '0',
      '&:hover': {
        color: '#FBC000',
      },
    },
    utility: {
      color: 'brandRed',
      backgroundColor: 'transparent',
      paddingX: '0',
      paddingY: '0',
      cursor: 'pointer',
      fontWeight: '600',
      '&:disabled': {
        color: 'brandRed',
        cursor: 'inherit',
        opacity: '0.7',
      },
    },
  },
};

export default theme;
