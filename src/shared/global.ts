import { createGlobalStyle, css } from 'styled-components';
// import { color, typography } from './styles';

export const fontUrl = '';

export const bodyStyles = css`
  /* global body styles */
  body {
  }
`;

export const rootStyles = css`
  /* global root styles */
  :root {
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${rootStyles}
  ${bodyStyles}
`;
