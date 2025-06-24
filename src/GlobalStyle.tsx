import { css, Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      /* reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        background-color: #ffffff;
        color: #000000;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;