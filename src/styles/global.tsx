import React from 'react';
import { Global, css, Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    color: ${theme.mode.text};
    background: ${theme.mode.background};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
