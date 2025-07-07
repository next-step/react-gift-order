import styled from '@emotion/styled';
export const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
`;

export const SenderTitle = styled.div`
  ${({ theme }) => `
    font-size : ${theme.typography.title2Bold.fontSize};
    font-weight : ${theme.typography.title2Bold.fontWeight};
    `}
`;

export const SenderInput = styled.input`
  ${({ theme }) => `
    font-size : ${theme.typography.body2Regular.fontSize};
    font-weight : ${theme.typography.body2Regular.fontWeight};
    border: 2px solid ${theme.colors.gray300};
    color: ${theme.colors.gray500}
  `}
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.gray900};
    outline: none;
  }
`;

export const SenderInfo = styled.div`
  padding-left: 10px;
  ${({ theme }) => `
    font-size : ${theme.typography.body2Regular.fontSize};
    font-weight : ${theme.typography.body2Regular.fontWeight};
    color: ${theme.colors.gray500}
  `}
`;
