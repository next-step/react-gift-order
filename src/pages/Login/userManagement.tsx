import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

interface User {
  email: string;
}

interface UserManagementType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const UserManagementContext = createContext<UserManagementType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'kakao-login-user';

export const UserManagementProvider = ({ children }: { children: ReactNode }) => {
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
    <UserManagementContext.Provider value={{ user, login, logout }}>
      {children}
    </UserManagementContext.Provider>
  );
};

export const useUserManagement = () => {
  const context = useContext(UserManagementContext);
  if (!context) throw new Error('useUserManagement must be used within UserManagementProvider');
  return context;
};
