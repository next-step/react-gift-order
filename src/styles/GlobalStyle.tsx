/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      /* reset css 역할 */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #fff;
        color: black;
        line-height: 2;
      }

      #root{
        width: 100%;
        max-width: 720px;
        margin: 0 auto;
        padding: 0 16px;
      }
        
      h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    `}
  />
);

export default GlobalStyle;