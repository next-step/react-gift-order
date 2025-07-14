import theme from "@/styles/theme"
import styled from "@emotion/styled"

interface AddPlusButtonStyle {
  backGroundColor?: keyof typeof theme.colors
  padding?: keyof typeof theme.space
  borderRadius?: keyof typeof theme.space
}
const AddPlusButton = styled.button<AddPlusButtonStyle>`
  ${({
    backGroundColor,
    padding,
    borderRadius,
    theme,
  
  }) => {
    return `
    width: auto;
    height: 30px;
    padding: ${theme.space[padding]};
    background-color: ${
      theme.colors[backGroundColor]
    };
    border-radius: ${theme.space[borderRadius]};
    };
    `
  }}
`
export default AddPlusButton
