import styled from "@emotion/styled"
import theme from "@/styles/theme"

const ReciverContainer = styled.div`
  background-color: ${theme.colors.gray00};
  width: 90%;
  max-width: 576px;
  height: 85vh;
  border: 1px solid #cccccc;
  border-radius: ${theme.space.spacing2};
  padding: 20px;
  position: relative;
  font-weight: 600;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
`

export default ReciverContainer
