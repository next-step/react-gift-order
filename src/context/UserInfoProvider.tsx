import { createContext, useState, type ReactNode } from "react";

type User = {
  email: string;
};

type UserInfoContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export function UserInfoProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(() => {
    const email = sessionStorage.getItem("email");
    return email ? { email } : null;
  });
  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {children}
    </UserInfoContext.Provider>
  );
}
