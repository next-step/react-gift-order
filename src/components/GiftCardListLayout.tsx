import theme from "@/styles/theme"
import styled from "@emotion/styled"

const GiftCardListLayout = styled.div`
  display: flex;
  gap: 12px;
  -webkit-text-size-adjust: 100%;
  overflow-x: auto;
  padding: 8px 16px 12px;

  &::-webkit-scrollbar {
    height: 6px;
    margin: 1px;
    padding: 1px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.gray300};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray600};
    border-radius: 3px;
  }
`

export default GiftCardListLayout
