import { useState, type ChangeEvent } from "react";

type ValidatorType = (value: string) => string | null;

const useInput = (initialValue: string = "", validator: ValidatorType = () => null) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    isTouched && setErrorMsg(validator(newValue));
  };

  const onBlur = () => {
    setIsTouched(true);
    setErrorMsg(validator(value));
  };

  return { value, setValue, onChange, errorMsg, onBlur };
};

export default useInput;
