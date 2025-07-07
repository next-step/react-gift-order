import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import Layout from '@/Layout'
import { useAuth } from '@/contexts/AuthContext'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${colors.text.default};
`

const Title = styled.h1`
  font-size: ${typography.title2Bold.fontSize};
  font-weight: ${typography.title2Bold.fontWeight};
  margin-bottom: ${spacing.spacing6};
`

const Button = styled.button`
  padding: ${spacing.spacing2} ${spacing.spacing4};
  background-color: ${colors.brand.kakaoYellow};
  border: none;
  border-radius: 4px;
  font-size: ${typography.body1Bold.fontSize};
  font-weight: ${typography.body1Bold.fontWeight};
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background-color: ${colors.brand.kakaoYellowHover};
  }
`

export default function MyPage() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Layout>
      <Container>
        <Title>마이페이지</Title>
        <Button onClick={handleLogout}>로그아웃</Button>
      </Container>
    </Layout>
  )
}