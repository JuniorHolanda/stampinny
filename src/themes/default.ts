export const defaultTheme = {
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '30px',
    lg: '50px',
    xl: '150px',
  },

  fonts: {
    title: 'var(--font-title), sans-serif',
    text: 'var(--font-text), sans-serif',
  },

  fontSizes: {
    titleSmall: 'clamp(18px, 2vw, 2em)',
    titleMedium: 'clamp(25px, 2.5vw, 3em)',
    titleLarge: 'clamp(30px, 7vw, 4em)',

    text: 'clamp(12px, 1vw, 2em)',
    textMedium: 'clamp(18px, 1vw, 3em)',
    textBig: 'clamp(20px, 3vw, 4em)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    tv: '1500px',
  },
};
