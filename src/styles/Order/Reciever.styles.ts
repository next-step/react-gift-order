import styled from '@emotion/styled';

export const RecieverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
`;

export const RecieverTitle = styled.div`
  ${({ theme }) => `
    font-size : ${theme.typography.title2Bold.fontSize};
    font-weight : ${theme.typography.title2Bold.fontWeight};
    `}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;
export const RecieverInputLabel = styled.label`
  width: 10%;
  min-width: 60px;
`;
export const RecieverInput = styled.input`
  ${({ theme }) => `
    font-size : ${theme.typography.body2Regular.fontSize};
    font-weight : ${theme.typography.body2Regular.fontWeight};
    border: 2px solid ${theme.colors.gray300};
    color: ${theme.colors.gray500}
  `}
  flex: 0;
  min-width: 0;
  width: 90%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.gray900};
    outline: none;
  }
`;
