import { UserInfoContext } from '@/contexts/UserInfoContext';
import { useState, type ReactNode } from 'react';

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ id: '', password: '' });

  return <UserInfoContext.Provider value={{ user, setUser }}>{children}</UserInfoContext.Provider>;
};
