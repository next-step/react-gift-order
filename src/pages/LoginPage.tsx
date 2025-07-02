import styled from '@emotion/styled'
import { Navbar } from '@/components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoginForm } from '@/hooks/useLoginForm'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    emailTouched,
    passwordTouched,
    validateEmail,
    validatePassword,
    isFormValid,
    setEmailTouched,
    setPasswordTouched,
  } = useLoginForm()

  const submitLoginForm = (e: React.FormEvent) => {
    e.preventDefault()
    validateEmail(email)
    validatePassword(password)

    if (isFormValid) {
      navigate(from, { replace: true })
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <Logo>kakao</Logo>
        <Form onSubmit={submitLoginForm}>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              const newValue = e.target.value
              setEmail(newValue)

              if (emailTouched) {
                validateEmail(newValue)
              }
            }}
            onBlur={() => {
              setEmailTouched(true)
              validateEmail(email)
            }}
          />
          {emailTouched && emailError && <Error>{emailError}</Error>}

          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              const newValue = e.target.value
              setPassword(newValue)

              if (passwordTouched) {
                validatePassword(newValue)
              }
            }}
            onBlur={() => {
              setPasswordTouched(true)
              validatePassword(password)
            }}
          />
          {passwordTouched && passwordError && <Error>{passwordError}</Error>}

          <LoginButton type="submit" disabled={!isFormValid}>
            로그인
          </LoginButton>
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

const Error = styled.div`
  font-size: 0.75rem;
  color: red;
  margin-top: -8px;
  margin-bottom: 0.625rem;
`

const LoginButton = styled.button<{ disabled: boolean }>`
  padding: 12px;
  font-size: 14px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray300 : theme.colors.kakaoYellow};
  color: ${({ disabled }) => (disabled ? '#888' : '#000')};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 33px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.gray300 : theme.colors.kakaoYellowHover};
  }
`
