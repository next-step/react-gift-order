import { useState } from 'react';

const MIN_PASSWORD_LENGTH = 8;
type ValidateResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      reason: string;
    };

function useLoginForm() {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [idError, setIdError] = useState<string>('');
  const [pwError, setPwError] = useState<string>('');
  function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateId(id: string): ValidateResult {
    if (!id) {
      return { ok: false, reason: 'ID를 입력해주세요' };
    }
    if (!isEmail(id)) {
      return { ok: false, reason: 'ID는 이메일 형식으로 입력해주세요.' };
    }
    return { ok: true };
  }
  function handleCheckId() {
    const result = validateId(id);
    setIdError(result.ok ? '' : result.reason);
    return result.ok;
  }

  function validatePw(pw: string): ValidateResult {
    if (!pw) {
      return { ok: false, reason: 'PW를 입력해주세요' };
    }
    if (pw.length < MIN_PASSWORD_LENGTH) {
      return { ok: false, reason: 'PW는 최소 8글자 이상이어야 합니다.' };
    }
    return { ok: true };
  }
  function handleCheckPw() {
    const result = validatePw(pw);
    setPwError(result.ok ? '' : result.reason);
    return result.ok;
  }
  const isValid = idError === '' && pwError === '' && id !== '' && pw !== '';
  function isValidForm() {
    return !handleCheckId() || !handleCheckPw();
  }
  return {
    id,
    pw,
    idError,
    pwError,
    isValid,
    handleIdChange: (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value),
    handlePwChange: (e: React.ChangeEvent<HTMLInputElement>) => setPw(e.target.value),
    handleIdBlur: () => handleCheckId(),
    handlePwBlur: () => handleCheckPw(),
    isValidForm,
  };
}

export default useLoginForm;
