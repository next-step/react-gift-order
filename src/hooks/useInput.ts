import { useState, type ChangeEvent } from "react";

type ValidatorType = (value: string) => string | null;

const useInput = (initialValue: string = "", validator: ValidatorType = () => null) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const errorMsg = isTouched ? validator(value) : null;

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setIsTouched(true);
  };

  return { value, onChange, onBlur, errorMsg };
};

export default useInput;
