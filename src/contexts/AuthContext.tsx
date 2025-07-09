import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

const SESSION_STORAGE_KEY = 'user';

interface User {
  name: string;
  email: string;
}

interface UserInfoContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  loading: boolean;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export function UserInfoProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, [user]);

  return (
    <UserInfoContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error('useUserInfo는 UserInfoProvider에서 사용되어야 합니다.');
  }
  return context;
};
