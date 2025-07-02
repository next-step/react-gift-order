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
        font-family: 'Pretendard', 'Apple SD Gothic Neo', Arial, sans-serif;
        background-color: #fff;
        color: #222;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        width: 100%;
        overscroll-behavior-y: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
      }

      #root {
        min-height: 100vh;
        width: 100vw;
        background: #fff;
      }

      button, input, textarea {
        font-family: inherit;
      }

      ::-webkit-scrollbar {
        display: none;
      }
      body {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}
  />
)

export default GlobalStyle
