import { useState, useEffect } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!emailRegex.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (password.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    setIsValid(!emailError && !passwordError && Boolean(email) && password.length >= 8);
  }, [email, password, emailError, passwordError]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    isValid,
    handleEmailBlur,
    handlePasswordBlur,
  };
};
