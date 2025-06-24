import { css, Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      /* Pretendard 웹폰트 import */
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
          'Malgun Gothic', sans-serif;
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