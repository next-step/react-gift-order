import { useState, useCallback } from "react";

type ValidationFunction = (value: string) => string;

interface UseInputOptions {
  initialValue?: string;
  validate?: ValidationFunction;
}

interface UseInputReturn {
  value: string;
  error: string;
  isTouched: boolean;
  isValid: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  reset: () => void;
}

export const useInput = (options: UseInputOptions = {}): UseInputReturn => {
  const { initialValue = "", validate } = options;

  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validateValue = useCallback(
    (inputValue: string): string => {
      if (!validate) return "";
      return validate(inputValue);
    },
    [validate]
  );

  const onChange = useCallback(
    (newValue: string) => {
      setValue(newValue);

      if (isTouched) {
        setError(validateValue(newValue));
      }
    },
    [isTouched, validateValue]
  );

  const onBlur = useCallback(() => {
    setIsTouched(true);
    setError(validateValue(value));
  }, [value, validateValue]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError("");
    setIsTouched(false);
  }, [initialValue]);

  const isValid = !error && (!validate || !validateValue(value));

  return {
    value,
    error,
    isTouched,
    isValid,
    onChange,
    onBlur,
    reset,
  };
};
