import { LOGIN_CONTENT } from '@/data/loginContent'
import { theme } from '@/styles/theme'
import { typographyMixin } from '@/components/common'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { PageContainer } from '@/components/common/PageContainer'
import { Button } from '@/components/common/Button'
import { useInput } from '@/hooks/useInput'
import { ROUTH_PATH } from '@/Router'
import { VALIDATE_RULES } from '@/data/validateRules'
import { useAuth } from '@/contexts/AuthContext'

// * 로그인 화면
export const Login = () => {
  // * 이메일, 비밀번호 입력 상태 관리 (useInput 커스텀 훅 & VALIDATE_RULES 사용)
  // ? VALIDATE_RULES : 유효성 검증을 위해 별도로 관리되는 규칙 상수 데이터
  const email = useInput('', VALIDATE_RULES.email)
  const password = useInput('', VALIDATE_RULES.password)

  // * 인증 컨텍스트 사용
  const { login } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: string })?.from || ROUTH_PATH.HOME

  // * 로그인 핸들러
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // ! 이메일에서 이름을 추출해서 사용
    // ? 실제로는 서버에서 받은 사용자 정보를 사용
    const name = email.value.split('@')[0]

    // * 로그인 정보 저장 (쿠키에 암호화되어 저장)
    login({
      name,
      email: email.value,
    })

    // * 로그인 시 이전 페이지로 리다이렉트
    navigate(from, { replace: true }) // * replace로 히스토리 정리
  }

  return (
    <PageContainer>
      <LogoImg alt="카카오 공식 로고" src={LOGIN_CONTENT.logoImgSrc}></LogoImg>

      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="이메일"
          value={email.value}
          onChange={email.handleChange}
          hasError={!!email.error}
          onBlur={email.handleBlur}
        />
        {email.error && <ErrorText>{email.error}</ErrorText>}
        <Input
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={password.handleChange}
          hasError={!!password.error}
          onBlur={password.handleBlur}
        />
        {password.error && <ErrorText>{password.error}</ErrorText>}
        <div css={{ height: `${theme.spacing.spacing12}` }} />
        <Button
          type="submit"
          variant="kakao"
          size="medium"
          disabled={!email.isValid || !password.isValid}
        >
          로그인
        </Button>
      </LoginForm>
    </PageContainer>
  )
}

// * 로고 이미지
const LogoImg = styled.img`
  width: 88px;
  height: 88px;

  margin-bottom: ${theme.spacing.spacing1};
`

// * 로그인 폼
const LoginForm = styled.form`
  width: 100%;
  max-width: 388px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// * 입력 란
const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;

  margin-top: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing1};
  padding: ${theme.spacing.spacing2} 0;

  ${typographyMixin('subtitle1Regular')}

  border-bottom: 1px solid ${({ hasError }) =>
    hasError ? theme.semanticColors.status.critical : theme.colors.gray.gray400};

  &::placeholder {
    color: ${theme.colors.gray.gray600};
  }

  &:focus {
    border-bottom: 1px solid
      ${({ hasError }) =>
        hasError ? theme.semanticColors.status.critical : theme.colors.gray.gray800};
  }

  transition: border-bottom 0.2s ease-in-out;
`

// * 에러 텍스트
const ErrorText = styled.p`
  ${typographyMixin('label2Regular')}

  text-align: left;
  width: 100%;

  color: ${theme.semanticColors.status.critical};
`
