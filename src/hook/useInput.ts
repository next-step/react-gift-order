import { useState } from 'react';

type ValidatorFn = (value: string) => string | null;

function useInput(validator: ValidatorFn, initialValue ='') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(' ');
  const [touched, setTouched] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const errorMsg = validator(e.target.value);
    setError(errorMsg);
  };

  const onBlur = () => {
    if(!touched) setTouched(true);
    const errorMsg = validator(value);
    setError(errorMsg);
  };

  const isValid = touched ? !error : true

  return { value, onChange, onBlur, error, isValid };
}

export default useInput;
