import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import Spacing from '@/components/Spacing'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string })?.from || '/'

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validEmail = (value: string) => {
    if (!value.trim()) {
      return 'ID를 입력해주세요.'
    }
    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailExpression.test(value)) {
      return 'ID는 이메일 형식으로 입력해주세요.'
    }
    return ''
  }

  const notFocusemail = () => {
    const error = validEmail(email)
    setEmailError(error)
  }

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
  setEmail(newValue)
  setEmailError(validEmail(newValue))
  }

  const goToLogin = () => {
    const error = validEmail(email)
    if (error) {
      setEmailError(error)
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <Wrapper>
        <Form>
          <Logo src="/loginlogo.svg" alt="kakao logo" />
          <FormBox>
            <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={changeEmail}
            onBlur={notFocusemail}
            hasError={!!emailError}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
            <Spacing />
            <Input type="password" placeholder="비밀번호" />
            <Spacing height="48px" />
            <LoginButton onClick={goToLogin}>로그인</LoginButton>
          </FormBox>
        </Form>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 56px); // Header 높이 제외
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`

const Form = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  width: 5.5rem;
  margin-bottom: 2rem;
`

const FormBox = styled.div`
  width: 100%;
`

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ hasError, theme }) => 
    hasError ? theme.colors.state.critical : theme.colors.gray[400]};
  padding: 8px 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.typography.body1Regular};
  &:focus {
    outline: none;
    border-color: black;
  }
`

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.state.critical};
  ${({ theme }) => theme.typography.label2Regular};
`

const LoginButton = styled.button<{ hasError?: boolean }>`
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.pressed};
  }
`
