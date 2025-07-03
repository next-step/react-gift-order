import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};
`;