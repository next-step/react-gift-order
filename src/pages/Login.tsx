import { LOGIN_CONTENT } from '@/entities/user/loginContent'
import { theme } from '@/shared/styles/theme'
import { typographyMixin } from '@/shared/ui'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { PageContainer } from '@/shared/ui/PageContainer'
import { Button } from '@/shared/ui/Button'
import { ROUTE_PATH } from '@/app/Router'
import { useAuth } from '@/shared/contexts/auth'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormData } from '@/entities/user'

// * 로그인 화면
export const Login = () => {
  // * 인증 컨텍스트 사용
  const { login } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: string })?.from || ROUTE_PATH.HOME

  // * React Hook Form 설정
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched', // * 첫 blur 이후 실시간 유효성 검사 (기존 useInput 동작과 동일)
  })

  // * 로그인 폼 제출 핸들러
  const onSubmit = (data: LoginFormData) => {
    // ! 이메일에서 이름을 추출해서 사용
    // ? 실제로는 서버에서 받은 사용자 정보를 사용
    const name = data.email.split('@')[0]

    // * 로그인 정보 저장 (쿠키에 암호화되어 저장)
    login({
      name,
      email: data.email,
    })

    // * 로그인 시 이전 페이지로 리다이렉트
    navigate(from, { replace: true }) // * replace로 히스토리 정리
  }

  return (
    <PageContainer>
      <LogoImg alt="카카오 공식 로고" src={LOGIN_CONTENT.logoImgSrc}></LogoImg>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} type="email" placeholder="이메일" hasError={!!errors.email} />
          )}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="비밀번호" hasError={!!errors.password} />
          )}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <div css={{ height: `${theme.spacing.spacing12}` }} />
        <Button type="submit" variant="kakao" size="medium" disabled={!isValid}>
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
