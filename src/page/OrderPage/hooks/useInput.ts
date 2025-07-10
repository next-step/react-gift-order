import { getValidator } from '@/utils/validate';
import { useState, type ChangeEvent } from 'react';

type FieldType = 'email' | 'password' | 'text' | 'phoneNumber' | 'textarea';

export type UseInputReturn<T> = {
  value: string;
  onChange: (e: ChangeEvent<T>) => void;
  error: string;
  validate: () => boolean;
};

const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>(
  type: FieldType,
  initialValue = ''
): UseInputReturn<T> => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(initialValue);

  const validator = getValidator(type);

  const onChange = (e: ChangeEvent<T>) => {
    setValue(e.target.value);
  };

  const validate = () => {
    const errorMessage = validator(value);
    setError(errorMessage);
    return errorMessage === '';
  };

  return { value, onChange, error, validate };
};

export default useInput;
