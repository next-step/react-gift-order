import { useState } from 'react';

const MIN_PASSWORD_LENGTH = 8;

function useLoginForm() {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [idError, setIdError] = useState<string>('');
  const [pwError, setPwError] = useState<string>('');
  function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function checkId(id: string): boolean {
    if (!id) {
      setIdError('ID를 입력해주세요');
      return false;
    } else if (!isEmail(id)) {
      setIdError('ID는 이메일 형식으로 입력해주세요.');
      return false;
    }
    setIdError('');
    return true;
  }
  function checkPw(pw: string): boolean {
    if (!pw) {
      setPwError('PW를 입력해주세요.');
      return false;
    } else if (pw.length < MIN_PASSWORD_LENGTH) {
      setPwError('PW는 최소 8글자 이상이어야 합니다.');
      return false;
    }
    setPwError('');
    return true;
  }
  const isValid = idError === '' && pwError === '' && id !== '' && pw !== '';

  return {
    id,
    pw,
    idError,
    pwError,
    isValid,
    checkId,
    checkPw,
    handleIdChange: (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value),
    handlePwChange: (e: React.ChangeEvent<HTMLInputElement>) => setPw(e.target.value),
    handleIdBlur: () => checkId(id),
    handlePwBlur: () => checkPw(pw),
  };
}

export default useLoginForm;
