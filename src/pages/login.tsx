import { css } from '@emotion/react'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { colors } from '../styles/colors'
import Header from '@/components/Header'
import { typography } from '../styles/typography'
import { useAuth } from '@/contexts/AuthContext'
import GlobalStyle from '@/styles/GlobalStyle'
import { useInput, validateEmail, validatePassword } from '@/hooks/useInput'


const wrapperStyle = css({
  maxWidth: 720,
  margin: '0 auto',
  alignItems: 'center'
})

const formStyle = css({
  width: 360,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  minHeight: '60vh',
})

const logoStyle = css({
  fontSize: 40,
  fontWeight: 400,
  marginBottom: 40,
})

const inputWrapStyle = css({ width: '100%', marginBottom: 16 })

const inputStyle = css({
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${colors.borderDefault}`,
  padding: '16px 0 8px 0',
  fontSize: 16,
  background: 'transparent',
  color: colors.textDefault,
  outline: 'none',
  marginBottom: 0,
  '::placeholder': {
    color: colors.textSub,
  },
})

const buttonStyle = (disabled: boolean) => css({
  width: '100%',
  background: disabled ? '#FFF7B2' : colors.kakaoYellow,
  color: colors.gray900,
  border: 'none',
  borderRadius: 6,
  padding: '14px 0',
  marginTop: 24,
  cursor: disabled ? 'not-allowed' : 'pointer',
  ...typography.body2Bold,
})

const errorTextStyle = css({
  color: 'red',
  fontSize: 13,
  marginTop: 4,
})


const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { login, isAuthenticated } = useAuth() // 인증 컨텍스트 사용

  const { 
    inputRef: emailRef, 
    error: emailError, 
    value: emailValue, 
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange 
  } = useInput(validateEmail)

  const { 
    inputRef: passwordRef, 
    error: passwordError, 
    value: passwordValue,
    handleBlur: handlePasswordBlur,
    handleChange: handlePasswordChange 
  } = useInput(validatePassword)

  // 이미 로그인된 사용자는 리디렉션
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [])


  // 뒤로가기 버튼 클릭
  const handleBack = () => {
    navigate('/')
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 로그인 처리
    login(emailValue, passwordValue)
    
    // 원래 가려던 페이지 또는 홈으로 이동
    const from = (location.state as any)?.from || '/';
    navigate(from, { replace: true })
  }


  // 실시간으로 업데이트되는 버튼 상태
  const isLoginButtonDisabled = 
    !emailValue || 
    !passwordValue || 
    !!emailError || 
    !!passwordError

  return (
    <div css={wrapperStyle}>
      <GlobalStyle />
      <Header onBack={handleBack} />

      <form css={formStyle} onSubmit={handleLogin} noValidate>
        <div css={logoStyle}>kakao</div>
        <div css={inputWrapStyle}>
          <input
            css={inputStyle}
            ref={emailRef}
            type="email"
            placeholder="이메일"
            required
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
          />
          {emailError && (
            <div id="email-error" css={errorTextStyle}>{emailError}</div>
          )}
        </div>
        <div css={inputWrapStyle}>
          <input
            css={inputStyle}
            ref={passwordRef}
            type="password"
            placeholder="비밀번호"
            required
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <div id="password-error" css={errorTextStyle}>{passwordError}</div>
          )}
        </div>
        <button
          css={buttonStyle(isLoginButtonDisabled)}
          type="submit"
          disabled={isLoginButtonDisabled}
        >
          로그인
        </button>
      </form>
    </div>
  )
}

export default LoginPage