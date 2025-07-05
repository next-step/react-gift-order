import { useState, type ChangeEvent } from "react";

type ValidatorType = (value: number) => string | null;

const useNumberInput = (initialValue: number = 0, validator: ValidatorType = () => null) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    const numericValue = Number(newValue);
    setValue(numericValue);
    isTouched ? setErrorMsg(validator(numericValue)) : setErrorMsg(null);
  };
  const onBlur = () => {
    setIsTouched(true);
    setErrorMsg(validator(value));
  };
  const validate = () => {
    setErrorMsg(validator(value));
    if (errorMsg) return false;
    return true;
  };
  return { value, setValue, onChange, onBlur, errorMsg, validate };
};

export default useNumberInput;
