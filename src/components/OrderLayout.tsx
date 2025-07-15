import type theme from "@/styles/theme"
import styled from "@emotion/styled"
interface LayoutStyle {
  marginTop?: keyof typeof theme.space
  paddingUp?: keyof typeof theme.space
  paddingLeft?: keyof typeof theme.space
  paddingRight?: keyof typeof theme.space
  minHeight?: string
  color?: keyof typeof theme.colors
}
const OrderLayout = styled.div<LayoutStyle>`
  ${({
    marginTop,
    paddingUp,
    paddingLeft,
    paddingRight,
    minHeight,
    color,
    theme,
  }) => {
    return `
  
  width: 100%;
  
  background-color: ${theme.colors.gray00};
  

  ${marginTop ? `margin-top:  ${theme.space[marginTop]};` : ""}
  ${paddingUp ? `padding-top:  ${theme.space[paddingUp]};` : ""}
  ${paddingLeft ? `padding-left:  ${theme.space[paddingLeft]};` : ""}
  ${paddingRight ? `padding-right:  ${theme.space[paddingRight]};` : ""}
  ${color ? `background-color:  ${theme.colors[color]};` : ""}
  ${minHeight ? `min-height: ${minHeight};` : `min-height: 100vh;`}
  `
  }}
`

export default OrderLayout
