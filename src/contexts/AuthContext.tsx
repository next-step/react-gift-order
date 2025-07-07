import { createContext, useEffect, useState, type ReactNode } from 'react';

type User = {
  email: string;
};

interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // localStorage 확인
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email) {
      // 토큰 유효성 확인 필요
      setUser({ email });
    }
  }, []);

  const login = (user: User, token: string) => {
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('email', user.email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
