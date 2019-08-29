const colors = {
  white: '#fff',
  lighterGray: '#d8d8d8',
  lightGray: '#757575',
  neutralGray: '#828282',
  darkGray: '#404040',
  darkerGray: '#333',
};

export default {
  breakpoints: ['375px', '768px', '900px', '1280px'],
  borders: [0, 2],
  space: [0, 6, 12, 18, 24, 36, 54, 72, 108, 144],

  // Colors
  colors: {
    text: colors.darkGray,
    background: colors.white,
    primary: colors.darkGray,
    secondary: colors.lighterGray,
    accent: colors.darkGray,
    muted: colors.lighterGray,
  },

  // Typography
  fontSizes: [17, 18, 24, 26, 32, 42],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 500,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  // Elements
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeigth: 'body',
    },
  },
  buttons: {
    dark: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeigth: 'bold',
      fontSize: 0,
      appearance: 'none',
      display: 'inline-block',
      color: 'primary',
      bg: 'transparent',
      border: '1',
      borderStyle: 'solid',
      borderColor: 'accent',
      m: 0,
      px: 4,
      py: 3,
      cursor: 'pointer',
    },
    light: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeigth: 'bold',
      fontSize: 0,
      appearance: 'none',
      display: 'inline-block',
      color: 'white',
      bg: 'transparent',
      border: '1',
      borderStyle: 'solid',
      borderColor: 'white',
      m: 0,
      px: 4,
      py: 3,
      cursor: 'pointer',
    },
  },
};
