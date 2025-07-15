import type theme from "@/styles/theme"
import styled from "@emotion/styled"
interface LayoutStyle {
  marginTop?: keyof typeof theme.space
  marginBottom?: keyof typeof theme.space
  paddingUp?: keyof typeof theme.space
  paddingLeft?: keyof typeof theme.space
  paddingRight?: keyof typeof theme.space
  height?: string
  color?: keyof typeof theme.colors
}
const Layout = styled.div<LayoutStyle>`
  ${({
    marginTop,
    marginBottom,
    paddingUp,
    paddingLeft,
    paddingRight,
    height,
    color,
    theme,
  }) => {
    return `
  max-width: 720px;
  margin: 0 auto;
  background-color: ${theme.colors.gray00};

  ${marginTop ? `margin-top:  ${theme.space[marginTop]};` : ""}
  ${marginBottom ? `margin-bottom:  ${theme.space[marginBottom]};` : ""}
  ${paddingUp ? `padding-top:  ${theme.space[paddingUp]};` : ""}
  ${paddingLeft ? `padding-left:  ${theme.space[paddingLeft]};` : ""}
  ${paddingRight ? `padding-right:  ${theme.space[paddingRight]};` : ""}
  ${color ? `background-color:  ${theme.colors[color]};` : ""}
  ${height ? `height:  ${height};` : `height:100vh;`}
  `
  }}
`

export default Layout
