import { css } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';

export const globalStyle = (theme: ThemeType) => css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.semanticColor.backgroundColor.default};
    color: ${theme.colors.semanticColor.textColor.default};
  }
  * {
    box-sizing: border-box;
  }

  #root {
    max-width: 720px;
    margin: 0 auto;
    background-color: ${theme.colors.semanticColor.backgroundColor.disabled};
  }
`;
