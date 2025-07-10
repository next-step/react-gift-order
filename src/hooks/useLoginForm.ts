import { useEffect, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('ID를 입력해주세요');
      return false;
    }

    if (!emailRegex.test(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요');
      return false;
    }

    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('PW를 입력해주세요.');
      return false;
    }
    if (password.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  useEffect(() => {
    if (emailError) {
      validateEmail();
    }
  }, [email]);

  useEffect(() => {
    if (passwordError) {
      validatePassword();
    }
  }, [password]);

  const isValid = !emailError && !passwordError && email && password;

  return {
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    isValid,
  };
};
