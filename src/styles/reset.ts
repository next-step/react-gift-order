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
      'Pretendard',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    background-color: #ffffff;
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
    font-family: inherit;
  }
`;

export default reset;
