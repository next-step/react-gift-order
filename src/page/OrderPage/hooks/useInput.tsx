import { getValidator } from '@/utils/validate';
import { useState } from 'react';

type FieldType = 'email' | 'password' | 'text' | 'phoneNumber';

export type UseInputReturn = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  validate: () => boolean;
};

const useInput = (type: FieldType, initialValue = ''): UseInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(initialValue);

  const validator = getValidator(type);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
