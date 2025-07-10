import { useMemo, useState } from 'react';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailError = useMemo(() => {
    if (!email.trim()) return 'ID를 입력해주세요.';
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email))
      return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password.trim()) return 'PW를 입력해주세요.';
    if (password.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  }, [password]);

  const changeEmail = (value: string) => {
    setEmail(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const validateEmail = () => {
    return emailError === '';
  };

  const validatePassword = () => {
    return passwordError === '';
  };

  const isValid = useMemo(() => {
    return emailError === '' && passwordError === '';
  }, [emailError, passwordError]);

  return {
    email,
    password,
    emailError,
    passwordError,
    changeEmail,
    changePassword,
    validateEmail,
    validatePassword,
    isValid,
  };
};
