import { useState, useMemo } from 'react';

export type Validator = (value: string, touched: boolean) => string;

export const useInput = (getError: Validator) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const error = useMemo(() => getError(value, touched), [value, touched]);
  const onChange = (v: string) => setValue(v);
  const validate = () => setTouched(true);
  const isValid = !getError(value, true); // touched가 true일 때 기준

  return { value, error, onChange, validate, isValid };
};
