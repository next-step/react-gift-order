import React from 'react';
import styled from '@emotion/styled';
import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { UnderlineInputField } from '@/components/Form/InputField/UnderlineInputField';

export interface LoginFormSectionProps {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  emailError?: string | null;
  passwordError?: string | null;
  isFormValid: boolean;
}

export const LoginFormSection: React.FC<LoginFormSectionProps> = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  emailError,
  passwordError,
  isFormValid,
}) => (
  <Wrapper>
    <UnderlineInputField
      placeholder="이메일"
      value={email}
      onChange={onChangeEmail}
    />
    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
    <HorizontalSpacing size="spacing4" />

    <UnderlineInputField
      placeholder="비밀번호"
      type="password"
      value={password}
      onChange={onChangePassword}
    />
    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
    <HorizontalSpacing size="spacing12" />

    <Button disabled={!isFormValid} onClick={onSubmit}>
      로그인
    </Button>
  </Wrapper>
);

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  maxWidth: '26.25rem',
  padding: theme.spacing.spacing4,
}));

const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.colors.semantic.critical.default,
  ...theme.typography.label2Regular,
  marginTop: theme.spacing.spacing1,
}));

const Button = styled.button(({ theme }) => ({
  width: '100%',
  height: '2.75rem',
  ...theme.typography.body2Regular,

  // 텍스트 색상: semantic.text가 없으니 scale.gray900 사용

  color: theme.colors.scale.gray900,
  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  borderRadius: theme.spacing.spacing1,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms',
  '&:hover': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowHover,
  },
  '&:active': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowActive,
  },
  '&:disabled': {

    // disabled 백그라운드도 scale.gray300 사용

    backgroundColor: theme.colors.scale.gray300,
    cursor: 'not-allowed',
  },
}));


// barrel export

export { LoginForm } from './LoginForm';   // barrel export


