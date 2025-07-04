import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idTouched, setIdTouched] = useState(false);
  const [pwTouched, setPwTouched] = useState(false);

  const isIdValid = id.length > 0 && emailRegex.test(id);
  const isPwValid = pw.length >= 8;
  const isFormValid = isIdValid && isPwValid;

  const idError =
    idTouched && id.length === 0
      ? 'ID를 입력해주세요.'
      : idTouched && !emailRegex.test(id)
      ? 'ID는 이메일 형식으로 입력해주세요.'
      : '';

  const pwError =
    pwTouched && pw.length === 0
      ? 'PW를 입력해주세요.'
      : pwTouched && pw.length < 8
      ? 'PW는 최소 8글자 이상이어야 합니다.'
      : '';

  return {
    id,
    pw,
    setId,
    setPw,
    idTouched,
    pwTouched,
    setIdTouched,
    setPwTouched,
    idError,
    pwError,
    isFormValid,
  };
};
