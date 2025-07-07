import { useState } from 'react';

interface UseOrderFormReturn {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  setError: (error: string) => void;
  validate: () => boolean;
}

const useOrderForm = (initialValue: string | number): UseOrderFormReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setValue(newValue);
    if (error) setError('');
  };

  const validate = (): boolean => {
    if (typeof value === 'string') {
      return value.trim() !== '';
    }
    return value > 0;
  };

  return {
    value,
    onChange,
    error,
    setError,
    validate,
  };
};

export default useOrderForm;
