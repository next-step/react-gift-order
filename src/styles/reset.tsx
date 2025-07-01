import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const customGlobalStyles = css`
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  body {
    font-family: 'Pretendard', Arial, sans-serif;
    background-color: rgb(247, 248, 249);
  }
  
  /* Mobile First Design 720px최대로 고정 */
  #root {
    max-width: 720px;
    margin: 0 auto;
  }
`;

export default function Reset() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        ${customGlobalStyles}
      `}
    />
  );
}