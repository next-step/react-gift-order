import { createContext, useEffect, useState } from "react";
import { ERROR_MESSAGES } from "@/constants/messages";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";

export type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
  isInitialized: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error(ERROR_MESSAGES.SYSTEM.USER_LOAD_ERROR, e);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const login = (user: User) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoggedIn: !!user, isInitialized }}
    >
      {children}
    </AuthContext.Provider>
  );
};
