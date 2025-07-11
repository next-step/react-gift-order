import { useEffect, useState } from 'react';

type ValidateResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      reason: string;
    };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmailFormat = (email: string): ValidateResult => {
  if (!email) {
    return { ok: false, reason: 'ID를 입력해주세요' };
  }

  if (!emailRegex.test(email)) {
    return { ok: false, reason: 'ID는 이메일 형식으로 입력해주세요' };
  }

  return { ok: true };
};

const validatePasswordFormat = (password: string): ValidateResult => {
  if (!password) {
    return { ok: false, reason: 'PW를 입력해주세요.' };
  }
  if (password.length < 8) {
    return { ok: false, reason: 'PW는 최소 8글자 이상이어야 합니다.' };
  }
  return { ok: true };
};

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const result = validateEmailFormat(email);
    setEmailError(result.ok ? '' : result.reason);
  }, [email]);

  useEffect(() => {
    const result = validatePasswordFormat(password);
    setPasswordError(result.ok ? '' : result.reason);
  }, [password]);

  const validateEmail = (): boolean => {
    const result = validateEmailFormat(email);
    setEmailError(result.ok ? '' : result.reason);
    return result.ok;
  };

  const validatePassword = (): boolean => {
    const result = validatePasswordFormat(password);
    setPasswordError(result.ok ? '' : result.reason);
    return result.ok;
  };

  const isValid = !emailError && !passwordError && !!email && !!password;

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
