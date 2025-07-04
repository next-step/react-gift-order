import { useMemo, useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validate';

const useInput = (initialValue: string, type: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>('');

  const isValid = useMemo(() => validatePassword(value) === '', [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(type === 'email' ? validateEmail : validatePassword);
  };

  return { value, onChange, error, isValid };
};
export default useInput;
