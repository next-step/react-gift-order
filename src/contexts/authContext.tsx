import { createContext, useContext, useState, type ReactNode } from "react";

export const AUTH_COOKIE_KEY = "userId";

type Auth = {
  isLoggedIn: boolean;
  userName?: string;
  userEmail?: string;
};

type AuthContextType = {
  auth: Auth;
  setAuth: (auth: Auth) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>({ isLoggedIn: false });

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth Provider 안에서 사용해야함");
  return context;
};
