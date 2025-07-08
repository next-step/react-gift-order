import { css } from '@emotion/react';

const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    font-family:
      'Pretendard Variable',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    line-height: 1.5;
    background-color: #ffffff;
    color: #000000;
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
    font: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default reset;
