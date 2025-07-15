import styled from "@emotion/styled"
import theme from "@/styles/theme"
const MakeRowUnder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 576px;
  position: absolute;
  bottom: 20px;

  gap: ${theme.space.spacing2};
`
export default MakeRowUnder
