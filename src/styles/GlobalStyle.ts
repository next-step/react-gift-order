import { css } from '@emotion/react'
import { theme } from '@/theme'

export const globalStyle = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard Variable', sans-serif;
    background-color: ${theme.colors.colorScale.gray[100]};
    color: ${theme.colors.semanticColor.textColor.default};
  }

  * {
    box-sizing: border-box;
  }

  #root {
    max-width: 720px;
    margin: 0 auto;
    background-color: ${theme.colors.colorScale.gray[200]};
  }
`
