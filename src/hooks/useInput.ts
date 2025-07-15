
import { useState, useCallback } from 'react';

interface UseInputOptions {
  initialValue?: string;
  validator?: (value: string) => string | null;
}

export function useInput({ initialValue = '', validator }: UseInputOptions) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      if (validator) {
        setError(validator(newValue));
      }
    },
    [validator],
  );

  const handleBlur = useCallback(() => {
    if (validator) {
      setError(validator(value));
    }
  }, [validator, value]);

  return {
    value,
    error,
    setValue,
    setError,
    bind: {
      value,
      onChange: handleChange,
      onBlur: handleBlur,
    },
  };
}
