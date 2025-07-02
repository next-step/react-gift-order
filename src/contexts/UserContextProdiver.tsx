import { type ReactNode } from "react";
import UserContext from "./UserContext";
import useStoredState from "@src/hooks/useStoredState";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [valid, setValid] = useStoredState<boolean>("valid", false);
  const [userName, setUserName] = useStoredState<string | null>("name", null);
  const [email, setEmail] = useStoredState<string | null>("email", null);

  const context = {
    valid: { value: valid, setValue: setValid },
    user: { value: userName, setValue: setUserName },
    email: { value: email, setValue: setEmail }
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
