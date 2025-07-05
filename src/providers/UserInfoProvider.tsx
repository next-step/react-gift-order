import { UserInfoContext } from '@/contexts/UserInfoContext';
import { useEffect, useState, type ReactNode } from 'react';

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ id: sessionStorage.getItem('id') || '', password: '' });

  useEffect(() => {
    sessionStorage.setItem('id', user.id);
  }, [user]);

  return <UserInfoContext.Provider value={{ user, setUser }}>{children}</UserInfoContext.Provider>;
};
