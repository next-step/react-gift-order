import { useState } from "react";

type StateHook<T> = {
  value: T;
  setValue: (value: T) => void;
};

export type UserInfoHook = {
  email: StateHook<string>;
  password: StateHook<string>;
};

export default function useUserInfo() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const hookset = {
    email: { value: email, setValue: setEmail },
    password: { value: password, setValue: setPassword }
  };
  return hookset;
}
