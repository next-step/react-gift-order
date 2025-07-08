import { useState } from "react";

type ValidatorFunction = (value: string) => string;

const useOrderInput = <T extends HTMLInputElement | HTMLTextAreaElement>(
  validator: ValidatorFunction,
  initialValue = "",
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<T>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError("");
  };

  const validate = () => {
    const validationResult = validator(value);
    setError(validationResult);
    return validationResult;
  };

  return {
    value,
    setValue,
    error,
    onChange: handleChange,
    validate,
  };
};

export default useOrderInput;
