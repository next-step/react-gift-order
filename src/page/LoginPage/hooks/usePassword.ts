import { useMemo, useState } from 'react';

const usePassword = (password: string) => {
  const [value, setValue] = useState<string>(password);
  const [error, setError] = useState<string>('');
  const NUM = 8;

  const isValid = useMemo(() => {
    return value.trim() !== '' && value.length >= NUM;
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    if (value.trim() === '') {
      setError('PW를 입력해주세요.');
    } else if (value.length < NUM) {
      setError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setError('');
    }
  };

  return { value, onChange, onBlur, error, isValid };
};
export default usePassword;
