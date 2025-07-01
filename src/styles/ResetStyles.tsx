import { Global, css } from '@emotion/react';

const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    font-family:
      'Pretendard',
      -apple-system,
      sans-serif;
    background-color: #fff;
    color: #000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const theme = {
  colors: {
    gray100: '#f7f8f9',
    gray300: '#eeeff1',
    gray900: '#2a3038',
    blue300: '#cbdffa',
    blue500: '#85b8fd',
    blue700: '#217cf9',
    kakaoYellow: '#fee500',
    kakaoYellowHover: '#ffea2e',
    disabled: '#f3f4f5',
    default: '#2a3038',
    sub: '#b0b3ba',
    placeholder: '#b0b3ba',
  },
  typography: {
    title1Bold: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.6875rem',
    },
    title1Regular: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '1.6875rem',
    },
    title2Bold: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
    },
    subtitle1Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  },
};

function ResetStyles() {
  return <Global styles={reset} />;
}

export default ResetStyles;
