import styled from '@emotion/styled'
import { Navbar } from '@/components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = () => {
    navigate(from, { replace: true })
  }

  return (
    <>
      <Navbar />
      <Container>
        <Logo>kakao</Logo>
        <Form>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </Form>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`

const Logo = styled.h1`
  font-size: 34px;
  font-family: 'Kakao', sans-serif;
  margin-bottom: 33px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 13px;
`

const Input = styled.input`
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  &:focus,
  &:focus-visible {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};
    outline: none;
  }
`

const LoginButton = styled.button`
  padding: 12px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 33px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
`
