import { useState, useEffect } from 'react';

type Validator = (value: string) => string;

export const useInputWithValidation = (
  initialValue: string,
  validate: Validator
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (focused) {
      setError(validate(value));
    }
  }, [value, validate, focused]);

  const handleBlur = () => {
    setFocused(true);
    setError(validate(value));
  };

  return {
    value,
    setValue,
    error: focused ? error : '',
    isValid: validate(value) === '',
    handleBlur,
  };
};
