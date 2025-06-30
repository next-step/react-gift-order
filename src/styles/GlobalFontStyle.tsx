import { css, Global } from '@emotion/react';

const GlobalFontStyle = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
           
      body {
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      }
    `}
  />
);

export default GlobalFontStyle;
