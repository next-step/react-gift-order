import styled from "@emotion/styled"
import type theme from "@/styles/theme"
interface TextProps {
  variant: keyof typeof theme.Typography
  margin: keyof typeof theme.space
  padding: keyof typeof theme.space
  marginTop?: keyof typeof theme.space
  marginBottom?: keyof typeof theme.space
  marginLeft?: keyof typeof theme.space
  marginRight?: keyof typeof theme.space
  color?: keyof typeof theme.colors
}

const Text = styled.p<TextProps>`
  ${({
    theme,
    variant,
    margin,
    padding,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    color,
  }) => {
    const [fontSize, fontWeight, lineHeight] =
      theme.Typography[variant].split(/\s+/)

    return `
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      margin: ${theme.space[margin]};
      padding: ${theme.space[padding]};
      ${marginTop ? `margin-top:  ${theme.space[marginTop]};` : ""}
      ${marginRight ? `margin-right:  ${theme.space[marginRight]};` : ""}
      ${marginLeft ? `margin-left:  ${theme.space[marginLeft]};` : ""}
      ${marginBottom ? `margin-bottom:  ${theme.space[marginBottom]};` : ""}
      ${color ? `color: ${theme.colors[color]}; ` : `color: ${theme.colors["textDefault"]}; `}
    `
  }}
`
export default Text
