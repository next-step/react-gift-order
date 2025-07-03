// src/hooks/useLoginForm.ts
import { theme } from '@/theme/theme';
import { useState } from 'react';

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [idError, setIdError] = useState('');
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState('');

  const validateId = (value: string) => {
    if (!value.trim()) return 'ID를 입력해주세요.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  };

  const validatePw = (value: string) => {
    if (!value.trim()) return 'PW를 입력해주세요.';
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  };

  const isFormValid = () => validateId(id) === '' && validatePw(pw) === '';

  const handleIdChange = (value: string) => {
    setId(value);
    setIdError(validateId(value));
  };

  const handlePwChange = (value: string) => {
    setPw(value);
    setPwError(validatePw(value));
  };

  const handleIdBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const err = validateId(e.target.value);
    setIdError(err);
    if (err) {
      e.currentTarget.style.borderColor = theme.semanticColors.state.critical;
    }
  };

  const handlePwBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const err = validatePw(e.target.value);
    setPwError(err);
    if (err) {
      e.currentTarget.style.borderColor = theme.semanticColors.state.critical;
    }
  };

  return {
    id,
    idError,
    pw,
    pwError,
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
    isFormValid,
  };
};
