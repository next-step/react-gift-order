import { useState, useMemo } from 'react';

export const usePasswordInput = () => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const error = useMemo(() => {
    if (!touched) return '';
    if (!value) return 'PW를 입력해주세요.';
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
    return '';
  }, [value, touched]);

  const onChange = (v: string) => setValue(v);
  const validate = () => setTouched(true);

  const isValid = value.length >= 8;

  return { value, error, onChange, validate, isValid };
};
