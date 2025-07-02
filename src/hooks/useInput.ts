import { useState } from "react";

type Validator = (value: string) => string | null;

const useInput = (validator: Validator) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid= validator(value)
  const error = touched ? isValid : null;

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    onBlur: () => {
      setTouched(true);
    },
    isValid:isValid,
    error,
    
  };
};
export default useInput;
