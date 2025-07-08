import type { FormEvent } from 'react'
import styled from '@emotion/styled'
import useLoginForm from '@/hooks/useLoginForm'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'

interface LoginFormSectionProps {
    onSuccess: (email: string) => void
}

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  height: 48px;
  padding: 0 ${spacing.spacing2};
  margin-bottom: ${spacing.spacing1};
  border: 1px solid ${colors.border.default};
  border-radius: 4px;
  font-size: ${typography.body1Regular.fontSize};
  outline: none;

  &::placeholder {
    color: ${colors.text.placeholder};
  }
`

const ErrorMessage = styled.p`
  margin: 0 0 ${spacing.spacing3};
  color: ${colors.status.critical};
  font-size: ${typography.body2Regular.fontSize};
  line-height: ${typography.body2Regular.lineHeight};
`

const Button = styled.button`
  height: 48px;
  background-color: ${colors.brand.kakaoYellow};
  border: none;
  border-radius: 4px;
  font-size: ${typography.body1Bold.fontSize};
  font-weight: ${typography.body1Bold.fontWeight};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:enabled {
    background-color: ${colors.brand.kakaoYellowHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export default function LoginFormSection({ onSuccess }: LoginFormSectionProps) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        handleEmailBlur,
        handlePasswordBlur,
        isValid,

    } = useLoginForm()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!emailError && !passwordError && email && password) {
            onSuccess(email)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                required
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
            <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}
                required
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <Button type="submit" disabled={!isValid}>
                로그인
            </Button>
        </Form>
    )
}