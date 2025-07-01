import styled from '@emotion/styled';

export const CategoryContainerStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0 50px;
  height: 50px;
  ${({ theme }) => `
    background-color: ${theme.colors.blue300};
    border-radius: 10px;
    border: 1px solid ${theme.colors.blue500};
  `};
`;
