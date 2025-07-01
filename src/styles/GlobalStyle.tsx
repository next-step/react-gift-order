// src/styles/GlobalStyle.tsx
import { Global, css } from '@emotion/react'

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body {
        font-family: 'Pretendard', sans-serif;
        background-color: #ffffff;
        color: #000000;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }

      button, input, textarea {
        font-family: inherit;
      }
        
    `}
  />
)

export default GlobalStyle
