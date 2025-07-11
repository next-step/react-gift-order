import { css } from '@emotion/react'
import { theme } from './theme'

export const typographyInput = css`
  font-size: ${theme.typography.body.body1Regular.fontSize};
  font-weight: ${theme.typography.body.body1Regular.fontWeight};
  line-height: ${theme.typography.body.body1Regular.lineHeight};
`

export const typographyInputSmall = css`
  font-size: ${theme.typography.body.body2Regular.fontSize};
  font-weight: ${theme.typography.body.body2Regular.fontWeight};
  line-height: ${theme.typography.body.body2Regular.lineHeight};
`

export const typographyLabel = css`
  font-size: ${theme.typography.body.body1Regular.fontSize};
  font-weight: ${theme.typography.body.body1Regular.fontWeight};
  line-height: ${theme.typography.body.body1Regular.lineHeight};
`

export const typographyLabelSmall = css`
  font-size: ${theme.typography.body.body2Regular.fontSize};
  font-weight: ${theme.typography.body.body2Regular.fontWeight};
  line-height: ${theme.typography.body.body2Regular.lineHeight};
`
