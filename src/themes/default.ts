const colors = {
  white: '#fff',
  lighterGray: '#f9f9f9',
  lightGray: '#d8d8d8',
  neutralGray: '#828282',
  mediumGray: '#757575',
  darkGray: '#404040',
  darkerGray: '#333',
  neonGreen: '#65FFCD',
};

const headingsDefaults = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  color: 'primary',
};

export default {
  breakpoints: ['375px', '768px', '900px', '1280px'],
  borders: [0, 2],
  space: [
    0, // 0
    6, // 1
    8, // 2
    10, // 3
    11, // 4
    12, // 5
    13, // 6
    18, // 7
    24, // 8
    36, // 9
    54, // 10
    72, // 11
    108, // 12
    144, // 13
  ],

  // Colors
  colors: {
    text: colors.darkGray,
    background: colors.white,
    primary: colors.darkGray,
    secondary: colors.lightGray,
    accent: colors.darkGray,
    muted: colors.lightGray,
    reverse: colors.white,
    linkHover: colors.lighterGray,
    linkActive: colors.neonGreen,
  },

  // Typography
  fontSizes: [
    13, // 0
    15, // 1
    17, // 2
    18, // 3
    21, // 4
    24, // 5
    26, // 6
    30, // 7
    32, // 8
    36, // 9
    42, // 10
    48, // 11
  ],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
    mono: 'PT Mono, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 500,
    styledLink: 700,
  },

  lineHeights: {
    bodySmall: '18px',
    body: '24px',
    headingSmall: '30px',
    heading: '36px',
    sectionTitleSmall: '36px',
    sectionTitle: '48px',
  },

  // Elements
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'primary',
      m: 0,
      p: 0,
    },
    h1: {
      ...headingsDefaults,
      fontSize: 5,
    },
    h2: {
      ...headingsDefaults,
      fontWeight: 'body',
      fontSize: 4,
    },
    h3: {
      ...headingsDefaults,
      fontSize: 3,
    },
    h4: {
      ...headingsDefaults,
      fontSize: 2,
    },
    h5: {
      ...headingsDefaults,
      fontSize: 1,
    },
    h6: {
      fontSize: 0,
      ...headingsDefaults,
    },
    ul: {
      listStyle: 'none',
      p: 0,
      m: 0,
    },
    li: {
      listStyle: 'none',
      p: 0,
      m: 0,
    },
    a: {
      ...headingsDefaults,
      color: 'primary',
      textDecoration: 'none',
    },
  },
  headings: {
    light: {
      color: 'white',
    },
    dark: {
      color: 'primary',
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
  forms: {
    label: {
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      paddingBottom: '12px',
      lineHeight: 'body',
    },
    input: {
      fontFamily: 'body',
      fontStyle: 'italic',
      lineHight: 'body',
      border: `2px solid ${colors.darkGray}`,
      paddingY: '16px',
      paddingX: '24px',
      marginBottom: '36px',
      borderRadius: 0,
    },
    checkbox: {
      fontFamily: 'body',
      width: '24px',
      height: '24px',
      minWidth: '24px',
      minHeight: '24px',
      border: `2px solid ${colors.darkGray}`,
      marginRight: '9px',
      marginLeft: 0,
      position: 'relative',
      cursor: 'pointer',
    },
  },
};
