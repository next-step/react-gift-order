import { colors } from './Color'
import { typography } from './Typography'

export const theme = {
  colors,
  typography,
}

export type AppTheme = typeof theme

// emotion Theme 타입 확장
import '@emotion/react'
declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}