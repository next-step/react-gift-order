import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validate';
import { validateText } from '@/page/OrderPage/utils/validateForm';

type FieldType = 'email' | 'password' | 'text';

const useInput = (type: FieldType) => {
  let validator: (value: string) => string;

  if (type === 'email') {
    validator = validateEmail;
  } else if (type === 'password') {
    validator = validatePassword;
  } else if (type === 'text') {
    validator = validateText;
  }

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
