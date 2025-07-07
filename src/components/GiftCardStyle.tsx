import theme from "@/styles/theme"
import styled from "@emotion/styled"

const GiftCardStyle = styled.button<{ $selected: boolean }>`
  img {
    width: auto;
    height: 56px;
    border-radius: 0.5rem;
    ${({ $selected }) =>
      $selected
        ? `border: 3px solid ${theme.colors.gray900};`
        : `border: 3px solid transparent;`}
  }
  border: none;
  background: none;
`

export default GiftCardStyle
