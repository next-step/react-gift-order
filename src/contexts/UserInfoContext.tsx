import { createContext, useContext, useState, type PropsWithChildren } from 'react';

interface UserInfo {
  email: string;
  token: string;
}

interface Ctx {
  userInfo: UserInfo;
  login: (email: string, token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const UserInfoContext = createContext<Ctx | null>(null);

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error('useUserInfo must be used within a UserInfoProvider');
  }
  return context;
};

export const UserInfoProvider = ({ children }: PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(() => ({
    email: sessionStorage.getItem('email') ?? '',
    token: sessionStorage.getItem('token') ?? '',
  }));

  const isLoggedIn = Boolean(userInfo.email);

  const login = (email: string, token: string) => {
    setUserInfo({ email, token });
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('token', token);
  };

  const logout = () => {
    setUserInfo({ email: '', token: '' });
    sessionStorage.clear();
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, login, logout, isLoggedIn }}>
      {children}
    </UserInfoContext.Provider>
  );
};
