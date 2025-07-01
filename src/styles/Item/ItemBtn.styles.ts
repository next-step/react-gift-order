import styled from '@emotion/styled';

export const ExpandBtn = styled.button`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.gray300};
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
  `}
  width: 500px;
  height: 50px;
  border-radius: 8px;
  display: block;
  margin: 20px auto 0;
`;
