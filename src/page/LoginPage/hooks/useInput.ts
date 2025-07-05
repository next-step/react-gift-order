import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validate';

type FieldType = 'email' | 'password';

const useInput = (type: FieldType) => {
  const validator = type === 'email' ? validateEmail : validatePassword;

  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    setError(validator(targetValue));
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setError(validator(targetValue));
    setTouched(true);
  };

  const isValid = touched && error === '';

  return { value, onChange, onBlur, error, isValid };
};
export default useInput;
