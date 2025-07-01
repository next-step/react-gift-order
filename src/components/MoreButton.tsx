import theme from "@/styles/theme"
import styled from "@emotion/styled"
interface MoreButtonStyle {
  background: keyof typeof theme.colors
}

const MoreButton = styled.button<MoreButtonStyle>`
  ${({ theme, background }) => {
    return `
      width: 100%;
      margin: 32px 0 0 0;
      padding: ${theme.space.spacing3} 0;
      border: 1px solid #eee;
      border-radius: ${theme.space.spacing2};
      background-color: ${theme.colors[background]};
      font-size: 16px;
      cursor: pointer;
    `
  }}
`

export default MoreButton
