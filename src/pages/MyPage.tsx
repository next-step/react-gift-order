import { Button, PageContainer, Typography } from '@/components/common'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ROUTH_PATH } from '@/Router'
import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useEffect } from 'react'

// * 마이 페이지
export const MyPage = () => {
  const navigate = useNavigate()
  const { isLogin, logout, user } = useAuth()

  // * 로그아웃 핸들러
  // ! 로그아웃 시에 로그인 페이지로 리다이렉트
  const handleLogout = () => {
    logout()
    navigate(ROUTH_PATH.LOGIN, { replace: true })
  }

  // ! 로그인하지 않은 사용자는 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isLogin) {
      navigate(ROUTH_PATH.LOGIN, { replace: true })
    }
  }, [isLogin, navigate])

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
