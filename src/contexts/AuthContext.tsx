import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!sessionStorage.getItem('authToken'));
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      sessionStorage.setItem('authToken', 'dummy-token');
    } else {
      sessionStorage.removeItem('authToken');
    }
  }, [isLoggedIn]);

  const login = (token: string) => { setIsLoggedIn(true); };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const value = { isLoggedIn, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};