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
const Text = styled.p`
  font-size: ${typography.body1Regular.fontSize};
  font-weight: ${typography.body1Regular.fontWeight};
  margin-bottom: ${spacing.spacing4};
`

export default function MyPage() {
  const { logout, userEmail } = useAuth()
  const navigate = useNavigate()

  const nickname = userEmail ? userEmail.split('@')[0] : ''
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Layout>
      <Container>
        <Title>{nickname}님 안녕하세요!</Title>
        {userEmail && (
          <Text>이메일 주소는 {userEmail} 입니다.</Text>
        )}        <Button onClick={handleLogout}>로그아웃</Button>
      </Container>
    </Layout>
  )
}