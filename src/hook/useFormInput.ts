import { useState } from 'react';

type ValidatorFn = (value: string) => string | null;

function useFormInput(validator: ValidatorFn, initialValue ='') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(' ');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError('')
  };

  const validate = () => {
    const errorMsg = validator(value);
    setError(errorMsg);
    return !errorMsg;
  };

  return { value, onChange, validate, error };
}

export default useFormInput;
