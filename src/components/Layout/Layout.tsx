import styled from '@emotion/styled'

export function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`
