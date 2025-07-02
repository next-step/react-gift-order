import {
  Container,
  FormContainer,
  KakaoTitle,
  InputForm,
  ErrorMessage,
} from './LoginForm.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import KaKaoTitleIcon from '@/assets/icons/kakao-title.svg?react'
import MyButton from '@/component/Button/Button'
import { useLoginForm } from '../hooks/useLoginForm'

const LoginForm: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    checkEmail,
    checkPassword,
    loginOK,
    emailTouched,
    setEmailTouched,
    passwordTouched,
    setPasswordTouched,
  } = useLoginForm()

  const navigate = useNavigate()
  const location = useLocation()
  const hasPreviousPage = location.key !== 'default'

  const handleLoginClick = () => {
    const emailValid = checkEmail()
    const passwordValid = checkPassword()
    if (!emailValid || !passwordValid) return
    console.log('로그인 요청:', { email, password })

    if (hasPreviousPage) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <Container>
      <FormContainer>
        <KakaoTitle>
          <KaKaoTitleIcon />
        </KakaoTitle>

        <InputForm
          placeholder="이메일"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          onBlur={() => setEmailTouched(true)}
          isError={!!emailError}
        />
        <ErrorMessage isActive={!!emailError}>{emailError}</ErrorMessage>

        <InputForm
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            checkPassword()
          }}
          onBlur={() => setPasswordTouched(true)}
          isError={!!passwordError}
        />
        <ErrorMessage isActive={!!passwordError}>{passwordError}</ErrorMessage>

        <MyButton
          buttonType="login"
          onClick={handleLoginClick}
          disabled={!loginOK()}
        >
          로그인
        </MyButton>
      </FormContainer>
    </Container>
  )
}

export default LoginForm
