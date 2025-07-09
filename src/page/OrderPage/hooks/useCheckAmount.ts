import { validateAmount } from '@/utils/validate';
import { useState } from 'react';

export type useCheckAmountReturn = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  validate: () => boolean;
};

const useCheckAmount = (initialValue = 1): useCheckAmountReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const validate = () => {
    const errorMessage = validateAmount(value);
    setError(errorMessage);
    return errorMessage === '';
  };

  return { value, onChange, error, validate };
};

export default useCheckAmount;
