import { css, Global } from '@emotion/react'
import { resetStyles } from './reset'
import { fontStyles } from './font'
import { baseStyles } from './base'

const GlobalStyles = () => (
  <Global
    styles={css`
      ${resetStyles}
      ${fontStyles}
      ${baseStyles}
    `}
  />
)

export default GlobalStyles
