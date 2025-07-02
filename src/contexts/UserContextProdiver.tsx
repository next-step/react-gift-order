import { useState, type ReactNode } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [valid, setValid] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

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
