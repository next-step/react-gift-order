import type theme from "@/styles/theme"
import styled from "@emotion/styled"
interface LayoutStyle {
  marginTop?: keyof typeof theme.space
  paddingLeft?: keyof typeof theme.space
  paddingRight?: keyof typeof theme.space
}
const Layout = styled.div<LayoutStyle>`
  ${({ marginTop, paddingLeft, paddingRight, theme }) => {
    return `
  max-width: 720px;
  margin: 0 auto;
  background-color: ${theme.colors.gray00};
  height: 100vh;

  ${marginTop ? `padding-top:  ${theme.space[marginTop]};` : ""}
  ${paddingLeft ? `padding-left:  ${theme.space[paddingLeft]};` : ""}
  ${paddingRight ? `padding-right:  ${theme.space[paddingRight]};` : ""}
  `
  }}
`

export default Layout
