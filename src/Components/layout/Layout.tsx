import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.gray.gray00};
`

const Content = styled.div`
  padding: 0 ${({ theme }) => theme.typography.body1Bold.fontSize};
`

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}
