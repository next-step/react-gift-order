import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'
import LoginFormSection from '@/components/LoginFormSection'
import Layout from '@/Layout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.background.default};
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing.spacing6};
`

const Logo = styled.h2`
  font-size: ${typography.title1Bold.fontSize};
  font-weight: ${typography.title1Bold.fontWeight};
  line-height: ${typography.title1Bold.lineHeight};
  margin-bottom: ${spacing.spacing10};
  color: ${colors.text.default};
`

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const from = (location.state as { from?: string })?.from ?? '/'


  const handleSuccess = (userEmail: string) => {
    login(userEmail)
    navigate(from, { replace: true })
  }

  return (
    <Layout>
      <Container>
        {/* <Header>
          <IconButton onClick={() => navigate(-1)} aria-label="back">
            <img src={backIcon} alt="back" height="28" />
          </IconButton>
          <Title>선물하기</Title>
          <IconButton onClick={() => navigate('/profile')} aria-label="profile">
            <img src={loginIcon} alt="profile" height="24" />
          </IconButton>
        </Header> */}
        <Main>
          <Logo>kakao</Logo>
          <LoginFormSection onSuccess={handleSuccess} />
        </Main>
      </Container>
    </Layout>
  )
}