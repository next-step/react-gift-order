import { LOGIN_CONTENT } from '@/data/loginContent'
import { theme } from '@/styles/theme'
import { typographyMixin } from '@/components/common'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { PageContainer } from '@/components/common/PageContainer'
import { Button } from '@/components/common/Button'
import { useInput } from '@/hooks/useInput'
import { ROUTH_PATH } from '@/Router'

// * 로그인 화면
export const Login = () => {
  // * 이메일, 비밀번호 입력 상태 관리 (useInput 커스텀 훅 사용)
  const email = useInput('', validateEmail)
  const password = useInput('', validatePassword)

  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: string })?.from || ROUTH_PATH.HOME

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // ! 로그인 정보 저장 로직 없이 바로 리디렉션
    // TODO: 이후 로그인 정보 저장 로직 추가 필요
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
          hasError={!email.isValid}
          onBlur={email.handleBlur}
        />
        {email.error && <ErrorText>{email.error}</ErrorText>}
        <Input
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={password.handleChange}
          hasError={!password.isValid}
          onBlur={password.handleBlur}
        />
        {password.error && <ErrorText>{password.error}</ErrorText>}
        <div css={{ height: `${theme.spacing.spacing12}` }} />
        <Button
          type="submit"
          variant="kakao"
          size="medium"
          disabled={
            email.value.length === 0 ||
            password.value.length === 0 ||
            !email.isValid ||
            !password.isValid
          }
        >
          로그인
        </Button>
      </LoginForm>
    </PageContainer>
  )
}

// ! 이메일 형식 검사를 위한 정규식
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

// * 이메일 유효성 검사 함수
const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return 'ID를 입력해주세요.'
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'ID는 이메일 형식으로 입력해주세요.'
  }

  return null
}

// * 비밀번호 유효성 검사 함수
const validatePassword = (password: string): string | null => {
  if (!password.trim()) {
    return 'PW를 입력해주세요.'
  }
  if (password.length < 8) {
    return 'PW는 최소 8글자 이상이어야 합니다.'
  }

  return null
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
