import React, { FC } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps,
} from 'styled-components';
import defaultTheme from '../../shared/theme';

export interface Theme {
  colors: {};
}

const ThemeProvider: FC<ThemeProviderProps<Theme>> = ({
  theme = defaultTheme,
  ...rest
}: ThemeProviderProps<Theme>) => {
  return <StyledThemeProvider theme={theme} {...rest} />;
};

export default ThemeProvider;
