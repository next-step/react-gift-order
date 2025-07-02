import { useState } from 'react';

export function LoginForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleIdBlur = () => {
    if (!id.trim()) {
      setIdError('ID를 입력해주세요.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id)) {
      setIdError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setIdError('');
    }
  };

  const handlePwBlur = () => {
    if (!pw.trim()) {
      setPwError('PW를 입력해주세요.');
    } else if (pw.length < 8) {
      setPwError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPwError('');
    }
  };

  const isValid = !idError && !pwError && id && pw;

  return {
    id,
    pw,
    idError,
    pwError,
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
    isValid,
  };
}
