import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      /* reset */
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        height: 100%;
      }
      body {
        height: 100%;
        font-family: "Pretendard";
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        max-width: 720px;
        margin: 0 auto;
        padding: 0 16px;
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
      }
      ul,
      ol {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyles;
