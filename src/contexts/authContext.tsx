import { clearCookieValue, setCookieValue } from "@/utils/cookie";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export const AUTH_COOKIE_KEY = "userId";

type Auth = {
  userEmail?: string;
};

type AuthContextType = {
  auth: Auth;
  login: (userEmail: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>({});

  const login = useCallback((userEmail: string) => {
    setAuth((prev) => ({ ...prev, userEmail }));
    setCookieValue(AUTH_COOKIE_KEY, userEmail);
  }, []);
  const logout = useCallback(() => {
    setAuth({});
    clearCookieValue(AUTH_COOKIE_KEY);
  }, []);
  const value = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth, login, logout],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth Provider 안에서 사용해야함");
  return context;
};
