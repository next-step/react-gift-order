import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

interface User {
  email: string;
}

interface UserManagementContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const UserManagementContext = createContext<UserManagementContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'kakao-login-user';

function useStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}

export const UserManagementProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useStorageState<User | null>(LOCAL_STORAGE_KEY, null);

  const login = (email: string) => {
    const userData = { email };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserManagementContext.Provider value={{ user, login, logout }}>
      {children}
    </UserManagementContext.Provider>
  );
};

export const UserManagement = () => {
  const context = useContext(UserManagementContext);
  if (!context) throw new Error('UserManagement must be used within UserManagementProvider');
  return context;
};
