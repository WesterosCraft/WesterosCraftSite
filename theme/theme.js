export const theme = {
  breakpoints: ['32rem', '48rem', '64rem', '75rem'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 88, 96],
  fontSize: [12, 14, 16, 20, 24, 32, 36, 48, 64],
  colors: {
    white: '#FFFFFF',
    offWhite: '#f3f4f4',
    green: '#365B41',
    gold: '#DAAC58',
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
    success: '#365B41',
    error: '#B32227',
    pending: '#DAAC58',
    red: {
      light: 'var(--theme-colors-red-light, #B32227)',
      medium: 'var(--theme-colors-red-medium, #9E1E22)',
      dark: 'var(--theme-colors-red-dark, #891A1D)'
    },
    gray: {
      100: 'var(--theme-colors-gray-100, #666666)',
      200: 'var(--theme-colors-gray-200, #333333)',
      300: '#231F20',
      400: '#E3E3E3'
    },
    light: {
      background: 'var(--theme-colors-background, #FFFFFF)',
      text: 'var(--theme-colors-text, #333333)'
    },
    dark: {
      background: 'var(--theme-colors-background, #161617)',
      text: 'var(--theme-colors-text, #f3f4f4)'
    }
  },
  text: {
    heading1: {
      color: 'var(--theme-colors-text)',
      fontSize: ['36px', '48px', '64px'],
      fontWeight: 'bold'
    },
    heading2: {
      color: 'var(--theme-colors-text)',
      fontSize: ['32px', '36px', '48px'],
      fontWeight: 'bold'
    },
    heading3: {
      color: 'var(--theme-colors-text)',
      fontSize: ['24px', '32px', '36px'],
      fontWeight: 'bold'
    },
    heading4: {
      color: 'var(--theme-colors-text)',
      fontSize: [2, 3, 4],
      fontWeight: 'regular'
    },
    heading5: {
      color: 'var(--theme-colors-text)',
      fontSize: [3],
      fontWeight: 'regular'
    },
    heading6: {
      color: 'var(--theme-colors-text)',
      fontSize: [3],
      fontWeight: 'regular',
      lineHeight: 1.5
    }
  },
  buttons: {
    white: {
      color: 'light.text',
      '&:before': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--theme-colors-background, #FFFFFF)',
        boxShadow: `0 0 0 2px var(--theme-colors-text, #ffffff)`
      },
      '&:after': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--theme-colors-background, #ffffff)',
        boxShadow: '0 0 0 2px var(--theme-colors-text, #ffffff)',
        zIndex: 1,
        transform: 'translate(-0.5em, -0.5em)',
        transition: 'transform 100ms ease-out'
      },
      '&:hover:after, &:hover span': {
        transform: 'translate(-0.25em, -0.25em)',
        transition: 'transform 100ms ease-out'
      },
      '&:active:after, &:active span': {
        transform: 'translate(0em, 0em)',
        transition: 'transform 50ms ease-in-out'
      }
    },

    red: {
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
      '&:before': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--theme-colors-background, #161617)',
        boxShadow: '0 0 0 2px var(--theme-colors-text, #161617)'
      },
      '&:after': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red.medium',
        boxShadow: '0 0 0 2px #9E1E22',
        zIndex: 1,
        transform: 'translate(-0.5em, -0.5em)',
        transition: 'transform 100ms ease-out'
      },
      '&:hover:after, &:hover span': {
        transform: 'translate(-0.25em, -0.25em)',
        transition: 'transform 100ms ease-out'
      },
      '&:active:after, &:active span': {
        transform: 'translate(0em, 0em)',
        transition: 'transform 50ms ease-in-out'
      }
    }
  },
  forms: {
    input: {
      fontFamily: 'heading',
      padding: '14px 32px 14px 16px',
      boxShadow: 'inset 4px 4px 0 #DDD',
      border: '2px solid #333',
      '&:focus': {
        outline: '3px solid #AAA',
        outlineOffset: 0
      }
    },
    select: {
      fontFamily: 'heading',
      boxShadow: 'inset 4px 4px 0 #DDD',
      border: '2px solid #333',
      '&:focus': {
        outline: '3px solid #AAA',
        outlineOffset: 0
      }
    },
    textarea: {},
    label: {
      fontWeight: 'bold',
      marginBottom: 2,
      fontSize: 1
    },
    radio: {},
    checkbox: {}
  },
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Sen', sans-serif;`,
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  }
};
