import type { ReactNode } from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  max-width: 720px; // 모바일
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.color.background.default};

  @media (min-width: 1024px) {
    // PC
  }
`;
