import { css } from '@emotion/react'
import { theme } from './theme'

// global base css 설정
export const baseStyles = css`
  body {
    /* 배경색 설정 */
    background-color: ${theme.semanticColors.background.fill};

    /* 기본 텍스트 색상 */
    color: ${theme.semanticColors.text.default};

    /* 기본 테두리 색상 */
    border-color: ${theme.semanticColors.border.default};
  }
`
