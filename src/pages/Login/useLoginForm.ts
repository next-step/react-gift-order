import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const emailError = useMemo(() => {
    if (!emailValue) return 'ID를 입력해주세요.';
    if (!EMAIL_REGEX.test(emailValue)) return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  }, [emailValue]);

  const passwordError = useMemo(() => {
    if (!passwordValue) return 'PW를 입력해주세요.';
    if (passwordValue.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  }, [passwordValue]);

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const validateEmail = () => {}; // 기존 구조 유지 (비어 있는 함수)
  const validatePassword = () => {}; // 기존 구조 유지

  const isValid = useMemo(() => {
    return !emailError && !passwordError;
  }, [emailError, passwordError]);

  return {
    email: {
      value: emailValue,
      error: emailError,
      onChange: handleEmailChange,
      validate: validateEmail,
    },
    password: {
      value: passwordValue,
      error: passwordError,
      onChange: handlePasswordChange,
      validate: validatePassword,
    },
    isValid,
    goToLogin: () => navigate(from, { replace: true }),
  };
};
