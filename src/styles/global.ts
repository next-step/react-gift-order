import { css } from '@emotion/react';

const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
        Roboto, 'Helvetica Neue', sans-serif;
        background-color: #f7f8f9;
        color: #000;
        height: 100%;
        margin: 0 auto;
        max-width: 720px;
        width: 100%;
    }
`;

export default globalStyle;
