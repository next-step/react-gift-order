import { useState, type ChangeEvent } from "react";

type ValidatorType = (value: string) => string | null;

const useStringInput = (initialValue: string = "", validator: ValidatorType = () => null) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    isTouched ? setErrorMsg(validator(newValue)) : setErrorMsg(null);
  };

  const onBlur = () => {
    setIsTouched(true);
    setErrorMsg(validator(value));
  };

  const validate = (): boolean => {
    const newErrorMsg = validator(value);
    setErrorMsg(newErrorMsg);
    return newErrorMsg === null;
  };

  return { value, setValue, onChange, onBlur, errorMsg, validate };
};

export default useStringInput;
