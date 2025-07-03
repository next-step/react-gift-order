import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const [passwordValue, setPasswordValue] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const emailError = useMemo(() => {
    if (!emailTouched) return '';
    if (!emailValue) return 'ID를 입력해주세요.';
    if (!EMAIL_REGEX.test(emailValue)) return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  }, [emailValue, emailTouched]);

  const passwordError = useMemo(() => {
    if (!passwordTouched) return '';
    if (!passwordValue) return 'PW를 입력해주세요.';
    if (passwordValue.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  }, [passwordValue, passwordTouched]);

  const changeEmail = (value: string) => {
    setEmailValue(value);
  };

  const changePassword = (value: string) => {
    setPasswordValue(value);
  };

  const validateEmail = () => {
    setEmailTouched(true);
  };

  const validatePassword = () => {
    setPasswordTouched(true);
  };

  const isValid = useMemo(() => {
    return (
      EMAIL_REGEX.test(emailValue) &&
      passwordValue.length >= 8
    );
  }, [emailValue, passwordValue]);

  const goToLogin = () => {
    navigate(from, { replace: true });
  };

  return {
    email: {
      value: emailValue,
      error: emailError,
      onChange: changeEmail ,
      validate: validateEmail,
    },
    password: {
      value: passwordValue,
      error: passwordError,
      onChange: changePassword,
      validate: validatePassword,
    },
    isValid,
    goToLogin,
  };
};
