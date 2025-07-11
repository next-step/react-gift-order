import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ROUTE_PATH } from '@/pages/Routes';
import { LoginFormSection } from './index';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_LENGTH = 8;

export const LoginForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    if (!email.trim()) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError(null);
    }
  }, [email]);

  useEffect(() => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (password.length < PASSWORD_LENGTH) {
      setPasswordError(`비밀번호는 ${PASSWORD_LENGTH}자 이상이어야 합니다.`);
    } else {
      setPasswordError(null);
    }
  }, [password]);

  const isFormValid = !emailError && !passwordError;

  const handleSubmit = () => {
    if (!isFormValid) return;
    const target = redirect ? decodeURIComponent(redirect) : ROUTE_PATH.HOME;
    navigate(target);
  };

  return (
    <LoginFormSection
      email={email}
      password={password}
      onChangeEmail={e => setEmail(e.target.value)}
      onChangePassword={e => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      emailError={emailError}
      passwordError={passwordError}
      isFormValid={isFormValid}
    />
  );
}