import { css, Global } from '@emotion/react';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: #eeeff1;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const GlobalStyles = () => <Global styles={reset} />;
