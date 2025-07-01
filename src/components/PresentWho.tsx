import theme from "@/styles/theme"
import styled from "@emotion/styled"

interface Styletype {
  color: keyof typeof theme.colors
  margin: keyof typeof theme.space
  padding: keyof typeof theme.space
  border: keyof typeof theme.space
}

const PresentWho = styled.div<Styletype>`
  background-color: ${({ color, theme }) => theme.colors[color]};
  width: auto;
  display: flex;
  flex: 1;
  padding: ${({ padding, theme }) => theme.space[padding]};
  border-radius: ${({ border, theme }) => theme.space[border]};
  margin: ${({ margin, theme }) => theme.space[margin]};
`
export default PresentWho
