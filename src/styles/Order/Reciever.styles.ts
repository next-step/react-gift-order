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
export const RecieverTable = styled.table`
  width: 100%;
  margin-top: 12px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background: white;
`;
export const RecieverThead = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray300};
`;
export const RecieverTh = styled.th`
  text-align: left;
  padding: 10px;
`;
export const RecieverTd = styled.td`
  text-align: left;
  padding: 10px;
`;

export const RecieverAddBtn = styled.button`
  ${({ theme }) => `
    background-color: ${theme.colors.gray300};
    font-size: ${theme.typography.body2Regular.fontSize};
    font-weight: ${theme.typography.body2Regular.fontWeight};
  `}
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const RecieverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecieverEmpty = styled.div`
  border: 1px solid ${({ theme }) => `${theme.colors.gray300}`};
  border-radius: 10px;
  padding: 25px;
  text-align: center;
`;

export const RecieverEmptyText = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.gray500};
    font-size: ${theme.typography.body2Regular.fontSize};
  `}
`;