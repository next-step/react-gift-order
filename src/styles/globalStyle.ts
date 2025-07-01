import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const globalStyle = (theme: Theme) => css`
  html,
  body {
    font-family: "Pretendard Variable", sans-serif;
    background-color: ${theme.colors.semantic.background.default};
    color: ${theme.colors.semantic.text.default};
    line-height: 1.6;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
