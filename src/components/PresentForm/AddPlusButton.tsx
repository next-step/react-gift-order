import theme from "@/styles/theme"
import styled from "@emotion/styled"

interface AddPlusButtonStyle {
  backGroundColor?: keyof typeof theme.colors
  padding?: keyof typeof theme.space
  paddingLeft?: keyof typeof theme.space
  paddingRight?: keyof typeof theme.space
  borderRadius?: keyof typeof theme.space
}
const AddPlusButton = styled.button<AddPlusButtonStyle>`
  ${({
    backGroundColor,
    padding,
    paddingLeft,
    paddingRight,
    borderRadius,
    theme,
  }) => {
    return `
    width: auto;
    height: 30px;
    border:none;
    padding: ${theme.space[padding]};
    padding-left: ${theme.space[paddingLeft]};
    padding-right: ${theme.space[paddingRight]};
    background-color: ${theme.colors[backGroundColor]};
    border-radius: ${theme.space[borderRadius]};
    };
    `
  }}
`
export default AddPlusButton
