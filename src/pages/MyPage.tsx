import { Button, PageContainer, Typography } from '@/shared/ui'
import { useAuth } from '@/app/providers/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@/app/Router'
import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'

// * 마이 페이지
export const MyPage = () => {
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  // * 로그아웃 핸들러
  // ! 로그아웃 시에 로그인 페이지로 리다이렉트
  const handleLogout = () => {
    logout()
    navigate(ROUTE_PATH.LOGIN, { replace: true })
  }

  return (
    <MyPageContainer>
      <Title variant="subtitle1Bold">마이 페이지</Title>
      <Text variant="body1Regular">{user.name}님 안녕하세요!</Text>
      <Text variant="body1Regular">이메일 주소는 {user.email}입니다.</Text>
      <LogoutButton variant="default" size="small" onClick={handleLogout}>
        로그아웃
      </LogoutButton>
    </MyPageContainer>
  )
}

const MyPageContainer = styled(PageContainer)`
  padding-left: ${theme.spacing.spacing4};
  justify-content: start;
  align-items: start;
`

const Title = styled(Typography)`
  margin-top: ${theme.spacing.spacing8};
  margin-bottom: ${theme.spacing.spacing2};
`

const Text = styled(Typography)``

const LogoutButton = styled(Button)`
  margin-top: ${theme.spacing.spacing6};
`
