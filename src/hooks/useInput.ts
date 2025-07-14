/*
import { useState } from 'react';

export const useInput = (initialValue: string, validateFn: (value: string) => string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (touched) setError(validateFn(e.target.value));
  };

  const onBlur = () => {
    setTouched(true);
    setError(validateFn(value));
  };

  const validate = (): boolean => {
    const err = validateFn(value);
    setError(err);
    return err === '';
  };

  const isValid = !error && touched;

  return { value, error, onChange, onBlur, isValid, validate };
};
*/
