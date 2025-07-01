// pages/LoginPage.tsx
import styled from '@emotion/styled'
import { useNavigate, useLocation } from 'react-router-dom'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing6};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`

const Input = styled.input`
  width: 100%;
  max-width: 320px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  padding: ${({ theme }) => theme.spacing.spacing2} 0;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  background: transparent;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  caret-color: ${({ theme }) => theme.colors.semantic.textDefault};
  outline: none;


  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.textPlaceholder};
  }
`

const Button = styled.button`
  width: 100%;
  max-width: 320px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  border: none;
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray1000};
  text-align: center;
  cursor: pointer;
`

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = () => {
    if (location.key !== 'default') {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <Wrapper>
        <Title>kakao</Title>
        <Input name="email" placeholder="이메일" />
        <Input name="password" placeholder="비밀번호" type="password" />
        <Button onClick={handleLogin}>로그인</Button>
      </Wrapper>
    </>
  )
}

export default LoginPage
