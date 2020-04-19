export const theme = {
  breakpoints: ['32rem', '48rem', '64rem', '75rem'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 88, 96],
  fontSize: [12, 14, 16, 20, 24, 32, 36, 48, 64],
  colors: {
    white: '#FFFFFF',
    green: '#365B41',
    gold: '#DAAC58',
    red: {
      light: '#B32227',
      medium: '#9E1E22',
      dark: '#891A1D',
    },
    gray: {
      100: '#666666',
      200: '#333333',
      300: '#231F20',
      400: '#E3E3E3',
    },
    crownlands: '#FBBE3B',
    westerlands: '#F98972',
    reach: '#AFBB59',
    stormlands: '#AD7E91',
    vale: '#90CADF',
    dorne: '#FAB15E',
    theWall: '#44505E',
    north: '#8DB1B4',
    riverlands: '#9DE3DE',
    ironIslands: '#4B9190',
    beyondTheWall: '#313C46',
  },
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
      fontSize: ['36px', '48px', '64px'],
      fontWeight: 'bold',
    },
    heading2: {
      fontSize: ['32px', '36px', '48px'],
      fontWeight: 'bold',
    },
    heading3: {
      fontSize: ['24px', '32px', '36px'],
      fontWeight: 'bold',
    },
    heading4: {
      fontSize: [2, 3, 4],
      fontWeight: 'regular',
    },
    heading5: {
      fontSize: [3],
      fontWeight: 'regular',
    },
    heading6: {
      fontSize: [3],
      fontWeight: 'regular',
      lineHeight: 1.5,
    },
  },
  buttons: {
    white: {
      backgroundColor: 'white',
      color: 'black',
    },
    red: {
      cursor: 'pointer',
      backgroundColor: 'red.medium',
      color: 'white',
      '&:hover': {
        backgroundColor: 'red.light',
      },
      '&:focus': {
        backgroundColor: 'red.dark',
      },
    },
  },
  forms: {
    input: {
      borderRadius: '4px',
      fontFamily: 'heading',
      padding: '14px 32px 14px 16px',
    },
    select: {},
    textarea: {},
    label: {
      fontWeight: 'bold',
      marginBottom: 2,
      fontSize: 1,
    },
    radio: {},
    checkbox: {},
  },
  variants: {},
}
