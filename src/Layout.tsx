import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import NavBar from '@/components/NavBar'
import { useNavigate, useLocation } from 'react-router-dom'
import { spacing } from '@/theme/spacing'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${spacing.spacing4};
`
interface LayoutProps extends PropsWithChildren {
  logoSrc: string
 }

const Layout = ({ children, logoSrc }: LayoutProps) => {
  const navigate = useNavigate()
  const location = useLocation()


  const handleBack = () => {
    navigate(-1)
  }

  const handleLoginClick = () => {
    navigate('/login', { state: { from: location.pathname } })  }
  return (
    <Container>
      <NavBar
        onBack={handleBack}
        logoSrc={logoSrc}
        onLoginClick={handleLoginClick}
      />
        {children}
    </Container>
  )
}

export default Layout