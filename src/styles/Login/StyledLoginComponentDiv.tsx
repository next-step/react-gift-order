import styled from '@emotion/styled';

export const StyledLoginComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 55%;
  p {
    color: ${({ theme }) => theme.palette.red600};
    ${({ theme }) => theme.typography.label2Regular}
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.spacing3};
  }
`;
