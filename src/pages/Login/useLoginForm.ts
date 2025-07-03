import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmailChange = (value: string) => {
    setEmailValue(value);

    if (!value) {
      setEmailError('ID를 입력해주세요.');
    } else if (!EMAIL_REGEX.test(value)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = () => {
    if (!emailValue) {
      setEmailError('ID를 입력해주세요.');
    } else if (!EMAIL_REGEX.test(emailValue)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);

    if (!value) {
      setPasswordError('PW를 입력해주세요.');
    } else if (value.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const validatePassword = () => {
    if (!passwordValue) {
      setPasswordError('PW를 입력해주세요.');
    } else if (passwordValue.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const isValid = useMemo(() => {
    return EMAIL_REGEX.test(emailValue) && passwordValue.length >= 8;
  }, [emailValue, passwordValue]);

  const goToLogin = () => {
    navigate(from, { replace: true });
  };

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
    goToLogin,
  };
};
