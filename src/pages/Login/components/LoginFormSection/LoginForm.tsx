import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTE_PATH } from '@/pages/Routes';
import { LoginFormSection } from './index';
import { AuthContext } from '@/context/AuthContext';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN_LENGTH = 8;


export const LoginForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);


  // 이메일 유효성 검사


  // 비밀번호 유효성 검사
  useEffect(() => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      setPasswordError(`비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`);

    } else {
      setPasswordError(null);
    }
  }, [password]);

  const isFormValid = !emailError && !passwordError;
  const { login } = useContext(AuthContext);

  // 폼 제출 핸들러 (매개변수 없이 호출)
  const handleSubmit = () => {
    if (!isFormValid) return;

    // 로그인 처리
    login({
      user: { id: email, name: email.split('@')[0] },
      token: 'mock-token-123',
    });

    // 리다이렉트
    const target = redirect ? decodeURIComponent(redirect) : ROUTE_PATH.HOME;
    navigate(target, { replace: true });

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
};


export default LoginForm;




