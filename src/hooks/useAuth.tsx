import { createContext, useContext, useState } from 'react';
import { type ReactNode } from 'react';

interface User {
  email: string;
}

interface AuthCtx {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem('auth_user');
    return raw ? JSON.parse(raw) : null;
  });

  const login = (email: string) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
