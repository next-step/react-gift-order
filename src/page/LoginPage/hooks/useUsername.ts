import { useMemo, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useUsername = (email: string) => {
  const [value, setValue] = useState<string>(email);
  const [error, setError] = useState<string>('');

  const isValid = useMemo(() => {
    return value.trim() !== '' && emailRegex.test(value);
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    if (value.trim() === '') {
      setError('ID를 입력해주세요.');
    } else if (!emailRegex.test(value)) {
      setError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setError('');
    }
  };

  return { value, onChange, onBlur, error, isValid };
};

export default useUsername;
