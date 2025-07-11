import ErrorText from '@components/common/ErrorText';
import { useAuth } from '@contexts/AuthContext';
import styled from '@emotion/styled';
import { useLoginForm } from '@hooks/useLoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginButtonProps {
  disabled: boolean;
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing.spacing4,
  backgroundColor: theme.colors.semantic.backgroundDefault,
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.typography.title1Regular.fontSize,
  fontWeight: theme.typography.title1Regular.fontWeight,
  lineHeight: theme.typography.title1Regular.lineHeight,
  marginBottom: theme.spacing.spacing10,
  color: theme.colors.semantic.textDefault,
}));

const Input = styled.input<{ hasError?: boolean }>(({ theme, hasError }) => ({
  width: '100%',
  maxWidth: '320px',
  padding: `${theme.spacing.spacing3} 0`,
  marginBottom: theme.spacing.spacing2,
  border: 'none',
  borderBottom: `1px solid ${
    hasError
      ? theme.colors.semantic.critical
      : theme.colors.semantic.borderDefault
  }`,
  fontSize: theme.typography.body1Regular.fontSize,
  fontWeight: theme.typography.body1Regular.fontWeight,
  color: theme.colors.semantic.textDefault,
  backgroundColor: 'transparent',
  outline: 'none',

  '::placeholder': {
    color: theme.colors.semantic.textPlaceholder,
  },
}));

const loginButtonYellowDisabled = '#fff584';

const Button = styled.button<LoginButtonProps>(({ theme, disabled }) => ({
  width: '100%',
  maxWidth: '320px',
  padding: `${theme.spacing.spacing3} 0`,
  marginTop: theme.spacing.spacing3,
  backgroundColor: disabled
    ? loginButtonYellowDisabled
    : theme.colors.semantic.kakaoYellow,
  color: disabled
    ? theme.colors.gray.gray600
    : theme.colors.semantic.textDefault,
  fontWeight: theme.typography.body1Bold.fontWeight,
  fontSize: theme.typography.body1Bold.fontSize,
  lineHeight: theme.typography.body1Bold.lineHeight,
  border: 'none',
  borderRadius: '6px',
  cursor: disabled ? 'not-allowed' : 'pointer',

  '&:hover': {
    backgroundColor: disabled
      ? loginButtonYellowDisabled
      : theme.colors.semantic.kakaoYellowHover,
  },

  '&:active': {
    backgroundColor: disabled
      ? loginButtonYellowDisabled
      : theme.colors.semantic.kakaoYellowActive,
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    isValid,
  } = useLoginForm();

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailOk = validateEmail();
    const isPWOk = validatePassword();

    if (!isEmailOk || !isPWOk) return;

    if (login({ email, password })) {
      if (window.history.length > 2) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } else {
      setLoginError('이메일 또는 비밀번호가 올바르지 않습니다.');
      console.log(loginError); //임시
    }
  };

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <Title>kakao</Title>
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => {
          setEmailTouched(true);
          validateEmail();
        }}
        hasError={emailTouched && !!emailError}
      />
      {emailTouched && emailError && <ErrorText>{emailError}</ErrorText>}
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => {
          setPasswordTouched(true);
          validatePassword();
        }}
        hasError={passwordTouched && !!passwordError}
      />
      {passwordTouched && passwordError && (
        <ErrorText>{passwordError}</ErrorText>
      )}
      <Button type="submit" disabled={!isValid}>
        로그인
      </Button>
    </Container>
  );
};

export default Login;
