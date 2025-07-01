/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <Background>{children}</Background>;
};
