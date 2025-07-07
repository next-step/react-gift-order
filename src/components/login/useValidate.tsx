import { useState } from "react";

export function useValidate(
  validator: (value: string) => boolean,
  errorMessage: string
) {
  const [string, setString] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setString(nextValue);
    setIsValid(validator(nextValue));
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setMessage("값을 입력해주세요");
    } else if (!isValid) {
      setMessage(errorMessage);
    } else if (isValid) {
      setIsValid(true);
      setMessage("");
    }
  };

  return { string, isValid, message, onChange, onBlur };
}
