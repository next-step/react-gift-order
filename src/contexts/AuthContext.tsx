import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem(USER_INFO_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isLoggedIn = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(USER_INFO_KEY, 'dummy-token');
    } else {
      sessionStorage.removeItem(USER_INFO_KEY);
    }
  }, [user]);

  const login = (userData: User) => { setUser(userData); };

  const logout = () => {
    setUser(null);
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
