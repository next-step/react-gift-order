import { useState } from "react";

export default function useFormField(initial = "") {
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

  return { value, onChange, error, validate };
}
