import { useState, useCallback } from 'react';

type Validator<T> = (value: T) => string;

export const useDeferredValidationInput = <T extends string | number>(
  validator: Validator<T>,
  initialValue: T
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value as string;

      // T가 number일 경우 숫자 변환
      const parsedValue =
        typeof initialValue === 'number' ? (Number(newValue) as T) : (newValue as T);

      setValue(parsedValue);
    },
    [initialValue]
  );

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
