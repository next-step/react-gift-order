import theme from "@/styles/theme"
import styled from "@emotion/styled"
import type { ComponentStyle } from "@/interfaces/ComponentStyle"

const Button = styled.img<ComponentStyle>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${theme.space.spacing2};
`

export default Button
