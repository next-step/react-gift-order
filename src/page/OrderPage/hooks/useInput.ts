import { useState } from 'react';
import { validateNumber, validateText } from '@/page/OrderPage/utils/validateForm';

type FieldType = 'text' | 'number';

export type UseInputReturn = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  validate: () => boolean;
};

const useInput = (type: FieldType, initialValue = ''): UseInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const validator = type === 'text' ? validateText : validateNumber;

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
