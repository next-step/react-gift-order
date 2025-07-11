
import { useState } from 'react';
import { EMAIL_REGEX } from '@/utils/regex';
import {
  ID_REQUIRED,
  ID_INVALID,
  PW_REQUIRED,
  PW_TOO_SHORT,
} from '@/constants/messages';

export type InputType = 'username' | 'password';

function useInput(type: InputType) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const validate = (v: string) => {
    const trimmed = v.trim();
    if (type === 'username') {
      if (!trimmed) return ID_REQUIRED;
      if (!EMAIL_REGEX.test(trimmed)) return ID_INVALID;
      return '';
    } else if (type === 'password') {
      if (!trimmed) return PW_REQUIRED;
      if (trimmed.length < 8) return PW_TOO_SHORT;
      return '';
    }
    return '';
  };

  const onChange = (val: string) => {
    setValue(val);
    setError(validate(val));
  };

  const onBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  const isValid = error === '' && value.trim() !== '';

  return { value, error, onChange, onBlur, isValid ,touched };
}

export default useInput;

