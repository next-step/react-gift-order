import { Global, css } from '@emotion/react';
import 'pretendard/dist/web/static/pretendard.css';

const globalStyleCss = css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: 'Pretendard', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  textarea:not([rows]) {
    min-height: 10em;
  }

  :target {
    scroll-margin-block: 5ex;
  }
`;

const GlobalStyle = () => <Global styles={globalStyleCss} />;

export default GlobalStyle;
