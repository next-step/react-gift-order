import { useState, useEffect } from 'react';

type Validator = (value: string) => string;

export const useInputWithValidation = (
  initialValue: string,
  validate: Validator
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      setError(validate(value));
    }
  }, [value, validate, touched]);

  const handleBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  return {
    value,
    setValue,
    error: touched ? error : '',
    isValid: validate(value) === '',
    handleBlur,
  };
};
