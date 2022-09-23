import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { baseThemeOptions } from './base-theme-options';
import { lightThemeOptions } from './light-theme-options';

const setupTheme = config => {
  let theme = createTheme(baseThemeOptions, {
    direction: config.direction
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

// export const theme = setupTheme({
//   direction: 'ltr',
//   responsiveFontSizes: true,
//   mode: 'light'
// });

const defaultTheme = createTheme();

export const th = createTheme({
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      md: 1080,
      desktop: 1080
    }
  },
  palette: {
    customGreen: {
      main: '#00333B',
      light: '#027587',
      dark: '#082226',
      contrastText: '#FFF'
    }
  }
});

export const theme = responsiveFontSizes(th);
