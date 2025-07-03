import { useState } from "react";

export const useInput = (validate: (value: string) => string) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nextValue = e.target.value;
    setValue(nextValue);
    if (touched) {
      setError(validate(nextValue));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  return {
    value,
    error,
    handleChange,
    handleBlur,
  };
};
