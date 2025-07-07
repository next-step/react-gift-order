import theme from "@/styles/theme"
import styled from "@emotion/styled"
import type { ComponentStyle } from "@/interfaces/ComponentStyle"

interface ButtonProps extends ComponentStyle {
  color?: keyof typeof theme.colors
  padding: keyof typeof theme.space
  margin: keyof typeof theme.space
}

const ButtonWithStyle = styled.button<ButtonProps>`
  ${({ theme, color, padding, width, height }) => {
    return `
  width: ${width};
  height: ${height};
  padding: ${theme.space[padding]};
  margin: ${theme.space[padding]};
  background-color: ${theme.colors[color]};
  border: 0;
  border-radius: ${theme.space.spacing1};
  `
  }}
`

export default ButtonWithStyle
