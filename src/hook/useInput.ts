import { useState } from 'react';

type ValidatorFn = (value: string) => string | null;

function useInput(validator: ValidatorFn, initialValue ='') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (touched) {
      const errorMsg = validator(e.target.value);
      setError(errorMsg);
    }
  };

  const onBlur = () => {
    setTouched(true);
    const errorMsg = validator(value);
    setError(errorMsg);
  };

  const isValid = !error && touched;

  return { value, onChange, onBlur, error, isValid };
}

export default useInput;
