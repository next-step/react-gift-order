import { useState } from "react";

type ValidatorFunction = (value: string) => string | undefined;

const useFormInput = (validator: ValidatorFunction) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (!validator(newValue)) {
      setError(undefined);
    }
  };

  const handleBlur = () => {
    setError(validator(value));
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
  };
};

export default useFormInput;
