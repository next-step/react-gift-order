import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorageItem, setStorageItem, removeStorageItem } from '@/utils/storage';

const USER_INFO_KEY = 'userInfo';
interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null; 
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = getStorageItem(USER_INFO_KEY);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setStorageItem(USER_INFO_KEY, userData);
  };

  const logout = () => {
    setUser(null);
    removeStorageItem(USER_INFO_KEY);
    navigate('/login');
  };

  const value = { isLoggedIn, user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
