import { useState, useCallback } from 'react';

type Validator = (value: string) => string;

export const useDeferredValidationInput = (validator: Validator) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const validate = useCallback(() => {
    const validationResult = validator(value);
    setError(validationResult);
    return validationResult === '';
  }, [value, validator]);

  return {
    value,
    error,
    onChange,
    validate,
  };
};
