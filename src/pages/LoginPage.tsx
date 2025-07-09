import styled from '@emotion/styled'
import { Navbar } from '@/components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'

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
          <Button onClick={handleLogin} style={{ marginTop: '33px' }}>로그인</Button>
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
