import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface User {
  email: string;
}

interface LoginContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    setUser(userInfo);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext는 LoginProvider 안에서만 사용해야 합니다.");
  }
  return context;
} 