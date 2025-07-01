import styled from '@emotion/styled';

export const RankingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
export const RankingTitle = styled.h2`
  ${({ theme }) => `
  font-size: ${theme.typography.title1Bold.fontSize};
  color: black;
  font-weight: ${theme.typography.title1Bold.fontWeight};
  `};
`;
