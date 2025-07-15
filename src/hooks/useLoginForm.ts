
import { useInput } from '@/hooks/useInput';
import { useCallback, useState } from 'react';

const validateEmail = (email: string) => {
  if (!email) return 'ID를 입력해주세요.';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }
  return null;
};

const validatePassword = (password: string) => {
  if (!password) return 'PW를 입력해주세요.';
  if (password.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
  return null;
};

export function useLoginForm() {
  const emailInput = useInput({ validator: validateEmail });
  const passwordInput = useInput({ validator: validatePassword });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    const isEmailValid = validateEmail(emailInput.value) === null;
    const isPasswordValid = validatePassword(passwordInput.value) === null;
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [emailInput.value, passwordInput.value]);

  return {
    emailInput,
    passwordInput,
    isFormValid,
    validateForm,
  };
}
