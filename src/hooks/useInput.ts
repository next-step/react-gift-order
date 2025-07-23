import { useState, useCallback } from 'react';
import type * as React from 'react';

interface UseInputOptions {
  initialValue?: string;
  validator?: (value: string) => string | null;
}

export function useInput({ initialValue = '', validator }: UseInputOptions) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback(() => {
    if (!validator) return true;
    const newError = validator(value);
    setError(newError);
    return newError === null;
  }, [validator, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (validator) {
      const newError = validator(newValue);
      setError(newError);
    }
  };

  const isValid = validator ? validator(value) === null : true;

  return {
    value,
    error,
    onChange: handleChange,
    validate,
    isValid,
    bind: {
      value,
      onChange: handleChange,
    },
  };
}
