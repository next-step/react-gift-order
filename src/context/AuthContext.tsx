// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AUTH_KEY = 'login_user';

type AuthContextType = {
  user: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(AUTH_KEY);
    if (saved) setUser(saved);
  }, []);

  const logIn = (username: string) => {
    setUser(username);
    localStorage.setItem(AUTH_KEY, username);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth는 <AuthProvider> 안에서 사용되어야 합니다.');
  return context;
};
