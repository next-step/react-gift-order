import styled from '@emotion/styled';

export const StyledNavTextDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 24px;
  ${({ theme }) => theme.typography.title1Bold};
`;
