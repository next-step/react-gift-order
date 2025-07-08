import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import Header from '@/components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import { spacing } from '@/theme/spacing'
import { useAuth } from '@/contexts/AuthContext'


const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${spacing.spacing4};
`
interface LayoutProps extends PropsWithChildren {}


const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn } = useAuth()

  const handleBack = () => {
    navigate(-1)
  }

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate('/profile')
    } else {
      navigate('/login', { state: { from: location.pathname } })
    }
  }
  return (
    <Container>
      <Header onBack={handleBack} onLoginClick={handleLoginClick} />
      {children}
    </Container>
  )
}

export default Layout