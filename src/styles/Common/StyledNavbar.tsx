import styled from '@emotion/styled';

export const StyledNavbar = styled.div`
  position: fixed;
  min-width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;
