import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  email: string;
};

type UserInfoContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserInfoContext = createContext<UserInfoContextType | undefined>(
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

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error("provider 범위 안에서만 useUserInfo를 사용하세요.");
  }
  return context;
};
