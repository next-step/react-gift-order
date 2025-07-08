import * as S from './LoginForm.styles'
import { useNavigate } from 'react-router-dom'
import KaKaoTitleIcon from '@/assets/icons/kakao-title.svg?react'
import MyButton from '@/component/Button/Button'
import { useLoginForm } from '../hooks/useLoginForm'
import { useUserContext } from '@/contexts/UserContext'

interface LoginFormProps {
  redirectPath: string
}

const LoginForm: React.FC<LoginFormProps> = ({ redirectPath }) => {
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
    setEmailTouched,
    setPasswordTouched,
  } = useLoginForm()

  const { login } = useUserContext()
  const navigate = useNavigate()

  const handleLoginClick = () => {
    const emailValid = checkEmail()
    const passwordValid = checkPassword()
    if (!emailValid || !passwordValid) return

    const nickname = email.split('@')[0]
    login({ email, nickname })

    navigate(redirectPath, { replace: true })
  }

  return (
    <S.Container>
      <S.FormContainer>
        <S.KakaoTitle>
          <KaKaoTitleIcon />
        </S.KakaoTitle>

        <S.InputForm
          placeholder="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isError={!!emailError}
        />
        <S.ErrorMessage isActive={!!emailError}>{emailError}</S.ErrorMessage>

        <S.InputForm
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
        <S.ErrorMessage isActive={!!passwordError}>
          {passwordError}
        </S.ErrorMessage>

        <MyButton
          onClick={handleLoginClick}
          variant="primary"
          size="large"
          disabled={!loginOK()}
          fullWidth
          style={{ marginTop: '32px' }}
        >
          로그인
        </MyButton>
      </S.FormContainer>
    </S.Container>
  )
}

export default LoginForm
