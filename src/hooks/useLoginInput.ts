import { useMemo, useState, type ChangeEvent } from "react";
import { getIdError, getPasswordError } from "./utils/errorMessage";

type UseLoginType = {
  id: string;
  password: string;
};

type IsTouchedType = {
  id: boolean;
  password: boolean;
};

const defaultInitialValue = {
  id: "",
  password: "",
};

const useLoginInput = (initialValue: UseLoginType = defaultInitialValue) => {
  const [user, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState<IsTouchedType>({ id: false, password: false });

  const errorMsgId = useMemo(() => getIdError(user.id), [user.id]);
  const errorMsgPassword = useMemo(() => getPasswordError(user.password), [user.password]);
  const errorMsg = {
    id: isTouched.id ? errorMsgId : null,
    password: isTouched.password ? errorMsgPassword : null,
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prevData) => ({ ...prevData, [name]: value }));
  };

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setIsTouched((prevData) => ({ ...prevData, [name]: true }));
  };

  return { user, onChange, onBlur, errorMsg };
};

export default useLoginInput;
