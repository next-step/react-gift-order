import { Global, css } from "@emotion/react";
import { spacing } from '@/theme/spacing'

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: ${spacing.spacing0};
        padding: ${spacing.spacing0};
      }
      html,
      body,
      #root {
        height: 100%;
      }
      #root {
        max-width: 720px;
        margin: 0 auto;
        padding: 0 ${spacing.spacing4};
      }
      body {
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        font-family: 'Pretendard', sans-serif;

      }
      ol,
      ul,
      menu {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote::before,
      blockquote::after,
      q::before,
      q::after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}
  />
);

export default GlobalStyle;