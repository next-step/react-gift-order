import { css, Global } from '@emotion/react';

const resetStyles = css`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Pretendard', Arial, sans-serif; /* 기본 폰트로 Pretendard 적용 */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const GlobalStyles = () => <Global styles={resetStyles} />;