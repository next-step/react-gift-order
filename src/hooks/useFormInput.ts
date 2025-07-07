import { useState } from "react";

type ValidatorFunction = (value: string) => string;

const useFormInput = <T extends HTMLInputElement | HTMLTextAreaElement>(
  validator: ValidatorFunction,
  initialValue = "",
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<T>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (!validator(newValue)) {
      setError("");
    }
  };

  const handleBlur = () => {
    setError(validator(value));
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
    onBlur: handleBlur,
    validate,
  };
};

export default useFormInput;
