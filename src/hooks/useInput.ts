import { useState } from "react";

export function useInput<T = string>(
  initialValue: T,
  validator?: (value: T) => string
) {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as T;
    setValue(newValue);
    
    if (error && validator) {
      const validationError = validator(newValue);
      setError(validationError);
    }
  };

  const handleBlur = () => {
    if (validator) {
      const validationError = validator(value);
      setError(validationError);
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError("");
  };

  return {
    value,
    error,
    handleChange,
    handleBlur,
    reset,
    setValue,
    setError,
  };
} 