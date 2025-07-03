import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    max-width: 720px;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.gray.gray00};
    box-shadow: 0 0 8px rgba(0,0,0,0.03);
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  @media (min-width: 720px) {
    padding: 0 32px;
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}
