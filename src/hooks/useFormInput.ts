import { useState } from "react";

const useFormInput = (validator: (value: string) => string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (!validator(newValue)) {
      setError("");
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
