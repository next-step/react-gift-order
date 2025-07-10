// hooks/useValidationInput.ts
import { useState, useCallback } from 'react';

export type Validator<T> = (value: T) => string;

export function useValidationInput<T extends string | number>(
  validator: Validator<T>,
  initialValue: T
) {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string>('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const raw = e.target.value;
      const parsed = typeof initialValue === 'number' ? (Number(raw) as T) : (raw as T);
      if (error) setError('');
      setValue(parsed);
    },
    [initialValue, error]
  );

  const onBlur = useCallback(() => {
    const result = validator(value);
    setError(result);
  }, [validator, value]);

  const validate = useCallback(() => {
    const result = validator(value);
    setError(result);
    return result === '';
  }, [validator, value]);

  const isValid = validator(value) === '';

  return { value, error, onChange, onBlur, validate, setValue, isValid };
}
