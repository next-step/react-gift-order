import { useState, useMemo } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useEmailInput = () => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const error = useMemo(() => {
    if (!touched) return '';
    if (!value) return 'ID를 입력해주세요.';
    if (!EMAIL_REGEX.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
    return '';
  }, [value, touched]);

  const onChange = (v: string) => setValue(v);
  const validate = () => setTouched(true);

  const isValid = EMAIL_REGEX.test(value);

  return { value, error, onChange, validate, isValid };
};
