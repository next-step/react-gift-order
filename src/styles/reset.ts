import { css } from '@emotion/react';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body{
    margin: 0;
    padding: 0; 
  }
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin-block-end: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
`;

export default reset;
