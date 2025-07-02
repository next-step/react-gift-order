import { useState, type ChangeEvent } from "react";

type ValidatorType = (value: string) => string | null;

const useInput = (initialValue: string, validator: ValidatorType) => {
  const [value, setValue] = useState(initialValue);
  const [active, setActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (active) {
      setErrorMsg(validator(event.target.value));
    }
  };

  const onBlur = () => {
    if (!active) {
      setActive(true);
      setErrorMsg(validator(value));
    }
  };

  return { value, onChange, errorMsg, onBlur };
};

export default useInput;
