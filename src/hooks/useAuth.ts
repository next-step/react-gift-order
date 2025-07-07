import { useState } from 'react';

export type User = { email: string };

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const session = sessionStorage.getItem('userInfo');
    return session ? JSON.parse(session) : null;
  });

  const login = (userData: User) => {
    sessionStorage.setItem('userInfo', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem('userInfo');
    setUser(null);
  };

  const isLoggedIn = !!user;

  return { user, login, logout, isLoggedIn };
};
