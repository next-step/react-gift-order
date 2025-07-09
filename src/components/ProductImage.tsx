import styled from "@emotion/styled"
import theme from "@/styles/theme"

interface ProductImageStyle {
  borderTopLeftRadius?: keyof typeof theme.space
  borderTopRightRadius?: keyof typeof theme.space
  borderBottomLeftRadius?: keyof typeof theme.space
  borderBottomRightRadius?: keyof typeof theme.space
}
const ProductImage = styled.img<ProductImageStyle>`
  ${({
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    theme,
  }) => {
    return `
width:100%;
${borderTopLeftRadius ? `border-top-left-radius:  ${theme.space[borderTopLeftRadius]};` : ""}
${borderTopRightRadius ? `border-top-right-radius:  ${theme.space[borderTopRightRadius]};` : ""}
${borderBottomLeftRadius ? `border-bottom-left-radius:  ${theme.space[borderBottomLeftRadius]};` : ""}
${borderBottomRightRadius ? `border-bottom-right-radius:  ${theme.space[borderBottomRightRadius]};` : ""}
`
  }}
`

export default ProductImage
