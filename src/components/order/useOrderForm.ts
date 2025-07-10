import { useState } from "react";

export default function useOrderForm(initial = "") {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (e.target.value.trim() !== "") setError(false);
  };

  const validate = () => {
    const hasError = value.trim() === "";
    setError(hasError);
    return !hasError;
  };

  const phonevalidate = () => {
    const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;
    const isValid = phoneRegex.test(value.trim());
    setError(!isValid);
    return isValid;
  };
  
  return { value, onChange, error, validate, phonevalidate };
}
