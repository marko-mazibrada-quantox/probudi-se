import type { Direction, Theme } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { baseThemeOptions } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module '@mui/material/styles' {
  export interface Palette {
    neutral?: Neutral;
  }

  export interface PaletteOptions {
    neutral?: Neutral;
  }

  // export interface Theme {
  //   palette: Palette;
  // }

  export interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  }
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  mode: 'light' | 'dark';
}

const setupTheme = (config: ThemeConfig): Theme => {
  let theme = createTheme(baseThemeOptions, config.mode === 'dark' ? darkThemeOptions : lightThemeOptions, {
    direction: config.direction
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

export const theme = setupTheme({
  direction: 'ltr',
  responsiveFontSizes: true,
  mode: 'light'
});
