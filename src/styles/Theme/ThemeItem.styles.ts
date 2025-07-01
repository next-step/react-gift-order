import styled from '@emotion/styled';

export const ThemeItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 130px;
  height: 70px;
  padding: 10px;
  cursor: pointer;
`;
export const ThemeImage = styled.img`
  width: 50px;
  height: 50px;
`;
export const ThemeItemText = styled.span`
  ${({ theme }) => `
    font-size: ${theme.typography.subtitle1Regular.fontSize};
    font-weight: ${theme.typography.subtitle1Regular.fontWeight};
    color: ${theme.colors.default};
  `}
`;
