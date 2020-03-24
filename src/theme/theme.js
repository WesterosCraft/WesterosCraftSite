export const theme = {
  breakpoints: ['32rem', '48rem', '64rem', '75rem'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 88, 96],
  colors: {
    white: '#FFFFFF',
    green: '#365B41',
    gold: '#DAAC58',
    red: {
      light: '#B32227',
      medium: '#9E1E22',
      dark: '#891A1D',
    } ,
  },
  fontSize: [12, 14, 16, 20, 24, 32, 36, 48, 64],
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Sen', sans-serif;`,
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  shadows: {},
  text: {
    heading1: {
      fontSize: [7],
      fontWeight: 'bold',
    },
    heading2: {
      fontSize: [6],
      fontWeight: 'regular',
    },
    heading3: {
      fontSize: [5],
      fontWeight: 'regular',
    },
    heading4: {
      fontSize: [4],
      fontWeight: 'regular',
    },
    heading5: {
      fontSize: [3],
      fontWeight: 'regular',
    },
  },
  buttons: {
    white: {
      backgroundColor: 'white',
      color: 'black',
    },
    red: {
      backgroundColor: 'red.medium',
      color: 'white',
      '&:hover': {
        backgroundColor: 'red.light'
      },
      '&:focus': {
        backgroundColor: 'red.dark'
      }
    }
  },
  forms: {
    input: {},
    select: {},
    textarea: {},
    label: {},
    radio: {},
    checkbox: {},
  },
  variants: {},
}
