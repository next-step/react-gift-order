import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validate';

const useInput = (type: string) => {
  const validator = type === 'email' ? validateEmail : validatePassword;

  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    setError(validator(targetValue));
  };

  const isValid = error === '';

  return { value, onChange, error, isValid };
};
export default useInput;
