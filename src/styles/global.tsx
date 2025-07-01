

import { Global, css } from '@emotion/react'
import reset from './reset'

export const globalStyles = css`
  ${reset};

  body {
    background: #fff;
    font-family: sans-serif;
    color: #222;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex
;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgb(247, 248, 249);
  }

  img, picture, video, canvas, svg {
    display: block;
    height: auto;
  }

  
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  @font-face {
        font-family: 'Ownglyph_ParkDaHyun';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }


    html, body {
        font-family: 'Pretendard-Regular', sans-serif;
    }



`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;

