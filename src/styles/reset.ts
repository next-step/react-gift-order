import { css } from '@emotion/react'

export const globalReset = css`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  background-color: #fff;
  font-family: 'Pretendard', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }
`
