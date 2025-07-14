/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import 'pretendard/dist/web/static/pretendard.css';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #f2f2f2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const GlobalStyle = () => <Global styles={reset} />;

export default GlobalStyle;

