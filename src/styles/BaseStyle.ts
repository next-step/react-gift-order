import { css } from '@emotion/react';
import type { Theme } from '@/styles/theme';

export const baseStyle = (theme: Theme) => css`
  body {
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.color.semantic.background.default};
    color: ${theme.color.semantic.text.default};
    line-height: ${theme.typography.body.body2Regular.lineHeight};
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }

  h2 {
    font-size: ${theme.typography.title.title1Bold.fontSize};
    font-weight: ${theme.typography.title.title1Bold.fontWeight};
    line-height: ${theme.typography.title.title1Bold.lineHeight};
    margin-bottom: ${theme.spacing[2]};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
