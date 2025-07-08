import styled from "@emotion/styled"

const RowForm = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.space.spacing2};
  gap: ${({ theme }) => theme.space.spacing2};
`
export default RowForm
