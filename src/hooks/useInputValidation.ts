import { useState, useCallback } from 'react';

type Validator = (value: string) => string;

export const useInputValidation = (validator: Validator) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (error) setError('');
    },
    [error]
  );

  const handleBlur = useCallback(() => {
    const err = validator(value);
    setError(err);
  }, [value]);

  const isValid = validator(value) === '';

  return {
    value,
    error,
    isValid,
    onChange: handleChange,
    onBlur: handleBlur,
  };
};
