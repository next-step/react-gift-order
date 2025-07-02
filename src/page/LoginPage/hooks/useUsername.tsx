import { useState } from 'react';

const useUsername = (email: string) => {
  const [value, setValue] = useState<string>(email);
  const [error, setError] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    if (!value.trim()) {
      setError('ID를 입력해주세요.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setError('');
    }
  };

  return { value, onChange, onBlur, error };
};

export default useUsername;
