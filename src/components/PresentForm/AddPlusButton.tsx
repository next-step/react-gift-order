import theme from "@/styles/theme"
import styled from "@emotion/styled"

interface AddPlusButtonStyle {
  width?: string
  backGroundColor?: keyof typeof theme.colors
  padding?: keyof typeof theme.space
  paddingBottom?: keyof typeof theme.space
  paddingLeft?: keyof typeof theme.space
  paddingRight?: keyof typeof theme.space
  borderRadius?: keyof typeof theme.space
  height: string
  flex?: string
}
const AddPlusButton = styled.button<AddPlusButtonStyle>`
  ${({
    width,
    backGroundColor,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderRadius,
    theme,
    height,
    flex,
  }) => {
    return `
    width: ${width ?? "auto"}; 
    height: ${height};
    border:none;
    padding: ${theme.space[padding]};
    padding-bottom: ${theme.space[paddingBottom]};
    padding-left: ${theme.space[paddingLeft]};
    padding-right: ${theme.space[paddingRight]};
    background-color: ${theme.colors[backGroundColor]};
    border-radius: ${theme.space[borderRadius]};
    flex: ${flex};
    };
    `
  }}
`
export default AddPlusButton
