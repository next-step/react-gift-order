/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { colors } from '../styles/colors'
import Header from '@/components/Header'
import { typography } from '../styles/typography'
import GlobalStyle from '@/styles/GlobalStyle'
import { useEmailInput } from '@/hooks/useEmailInput'
import { usePasswordInput } from '@/hooks/usePasswordInput'

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
const buttonStyle = css({
  width: '100%',
  background: colors.kakaoYellow,
  color: colors.gray900,
  border: 'none',
  borderRadius: 6,
  padding: '14px 0',
  marginTop: 24,
  cursor: 'pointer',
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
  const { emailRef, emailError, handleEmailBlur, checkAndSetError: checkEmailError } = useEmailInput()
  const { passwordRef, passwordError, handlePasswordBlur, checkAndSetError: checkPasswordError } = usePasswordInput()

  // 뒤로가기 버튼 클릭
  const handleBack = () => {
    navigate('/')
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const emailErr = checkEmailError()
    const pwErr = checkPasswordError()
    if (emailErr || pwErr) return
    const from = (location.state as any)?.from || '/'
    navigate(from, { replace: true })
  }

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
          />
          {passwordError && (
            <div id="password-error" css={errorTextStyle}>{passwordError}</div>
          )}
        </div>
        <button css={buttonStyle} type="submit">로그인</button>
      </form>
    </div>
  )
}

export default LoginPage
