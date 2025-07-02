import styled from '@emotion/styled'
import { Navbar } from '@/components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const isEmailValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const isPasswordValid = (value: string) => value.length >= 8

  const validateEmail = () => {
    setEmailTouched(true)
    if (!email) {
      setEmailError('ID를 입력해주세요.')
    } else if (!isEmailValid(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = () => {
    setPasswordTouched(true)
    if (!password) {
      setPasswordError('PW를 입력해주세요.')
    } else if (!isPasswordValid(password)) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.')
    } else {
      setPasswordError('')
    }
  }

  const isFormValid = isEmailValid(email) && isPasswordValid(password)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    validateEmail()
    validatePassword()

    if (isFormValid) {
      navigate(from, { replace: true })
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <Logo>kakao</Logo>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              const newValue = e.target.value
              setEmail(newValue)

              if (emailTouched) {
                if (!newValue) {
                  setEmailError('ID를 입력해주세요.')
                } else if (!isEmailValid(newValue)) {
                  setEmailError('ID는 이메일 형식으로 입력해주세요.')
                } else {
                  setEmailError('')
                }
              }
            }}
            onBlur={() => {
              setEmailTouched(true)
              validateEmail()
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
                if (!newValue) {
                  setPasswordError('PW를 입력해주세요.')
                } else if (!isPasswordValid(newValue)) {
                  setPasswordError('PW는 최소 8글자 이상이어야 합니다.')
                } else {
                  setPasswordError('')
                }
              }
            }}
            onBlur={() => {
              setPasswordTouched(true)
              validatePassword()
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
