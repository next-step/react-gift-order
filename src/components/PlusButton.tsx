import theme from "@/styles/theme"
import styled from "@emotion/styled"

interface PlusButtonStyle {
  backGroundColor?: keyof typeof theme.colors
  padding?: keyof typeof theme.space
  borderRadius?: keyof typeof theme.space
  activeColor?: keyof typeof theme.colors
  active?: boolean
}
const PlusButton = styled.img<PlusButtonStyle>`
  ${({
    backGroundColor,
    padding,
    borderRadius,
    theme,
    activeColor,
    active,
  }) => {
    return `
    width: 30px;
    height: 30px;
    padding: ${theme.space[padding]};
    background-color: ${
      active ? theme.colors[activeColor] : theme.colors[backGroundColor]
    };
    border-radius: ${theme.space[borderRadius]};
    color: ${active ? theme.colors.default : theme.colors.textDefault};
    };
    `
  }}
`
export default PlusButton
