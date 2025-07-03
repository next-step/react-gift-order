import { useState } from 'react';

interface UseInputProps {
  initialValue?: string;
  validator?: (value: string) => string;
}

export const useInput = ({ initialValue = '', validator }: UseInputProps = {}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    //입력중에도 에러가 표시되면 UX가 좋지않은듯해서 입력중에는 에러를 없애기
    setError('');
  };

  const handleBlur = () => {
    if (validator) {
      const validationError = validator(value);
      setError(validationError);
    }
  };

  const hasError = !!error;

  return {
    value,
    error,
    hasError,
    onChange: handleChange,
    onBlur: handleBlur,
    setValue,
    setError,
  };
}; 