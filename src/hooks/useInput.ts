import { useState } from 'react';

interface UseInputOptions {
  initialValue?: string;
  validator?: (value: string) => string | null;
}

export function useInput({ initialValue = '', validator }: UseInputOptions) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (validator) {
      const newError = validator(newValue);
      if (newError !== error) {
        setError(newError);
      }
    }
  };

  return {
    value,
    error,
    onChange: handleChange,
    bind: {
      value,
      onChange: handleChange,
    },
  };
}
