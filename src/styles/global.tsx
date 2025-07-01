import { Global, css } from '@emotion/react';
import '@/styles/reset.css';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
    `}
  />
);

export default GlobalStyle;
