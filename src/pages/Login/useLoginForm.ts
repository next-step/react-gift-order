import { useState, useMemo } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordError) setPasswordError('');
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('ID를 입력해주세요.');
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('PW를 입력해주세요.');
    } else if (password.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const isValid = useMemo(() => {
    return EMAIL_REGEX.test(email) && password.length >= 8;
  }, [email, password]);

  return {
    email,
    emailError,
    handleEmailChange,
    validateEmail,

    password,
    passwordError,
    handlePasswordChange,
    validatePassword,

    isValid,
  };
};