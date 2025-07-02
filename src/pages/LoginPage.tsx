import styled from '@emotion/styled'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.red.red500};
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
  max-width: 320px;
  width: 100%;
`

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordTouched, setPasswordTouched] = useState(false)

  const isValid = emailError === '' && passwordError === '' && emailTouched && passwordTouched

  const validateEmail = (value: string): string => {
    if (!value.trim()) return 'ID를 입력해주세요.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.'
    return ''
  }

  const validatePassword = (pw: string) => {
    if (!pw) return 'PW를 입력해주세요.'
    if (pw.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.'
    return ''
  }

  const handleEmailBlur = () => {
    setEmailTouched(true)
    const error = validateEmail(email)
    setEmailError(error)
  }

  const handlePasswordBlur = () => {
    setPasswordTouched(true)
    setPasswordError(validatePassword(password))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (emailTouched) {
      setEmailError(validateEmail(e.target.value))
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (passwordTouched) {
      setPasswordError(validatePassword(e.target.value))
    }
  }

  const handleLogin = () => {
    if (location.key !== 'default') {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <Wrapper>
      <Title>kakao</Title>

      <Input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      {emailError && <ErrorMsg>{emailError}</ErrorMsg>}

      <Input
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />
      {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}
      <Button onClick={handleLogin} disabled={!isValid}>로그인</Button>
    </Wrapper>
  )
}

export default LoginPage
