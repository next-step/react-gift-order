import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

interface User {
  email: string;
}

interface PascalCaseType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const PascalCaseContext = createContext<PascalCaseType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'kakao-login-user';

export const PascalCaseProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <PascalCaseContext.Provider value={{ user, login, logout }}>
      {children}
    </PascalCaseContext.Provider>
  );
};

export const PascalCase = () => {
  const context = useContext(PascalCaseContext);
  if (!context) throw new Error('PascalCase must be used within UserManagementProvider');
  return context;
};
