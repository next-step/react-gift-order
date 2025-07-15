import styled from "@emotion/styled"
import theme from "@/styles/theme"

const ReceiverCard = styled.section`
  width: 100%;
  padding: ${theme.space.spacing2};
  margin-top: ${theme.space.spacing4};
  &:not(:first-of-type) {
    border-top: 1px solid ${theme.colors.gray300};
    margin-top: ${theme.space.spacing4};
    padding-top: ${theme.space.spacing6};
  }
`

export default ReceiverCard
