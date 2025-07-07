import { createContext, useContext, useState, type PropsWithChildren } from 'react';

interface UserInfo {
  email: string;
  password: string;
}

interface Ctx {
  userInfo: UserInfo;
  login: (email: string, password: string) => void;
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
    password: sessionStorage.getItem('password') ?? '',
  }));

  const isLoggedIn = Boolean(userInfo.email);

  const login = (email: string, password: string) => {
    setUserInfo({ email, password });
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
  };

  const logout = () => {
    setUserInfo({ email: '', password: '' });
    sessionStorage.clear();
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, login, logout, isLoggedIn }}>
      {children}
    </UserInfoContext.Provider>
  );
};
