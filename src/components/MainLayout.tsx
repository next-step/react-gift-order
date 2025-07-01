import styled from '@emotion/styled'
import type { PropsWithChildren } from 'react'
import Header from './Header';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
    <Header />
    <Container>
      {children}
    </Container>
    </>
  )
}

const Container = styled.main`
  max-width: 720px;
  margin: 0 auto;
  padding-top: 56px;
  width: 100%;
`;