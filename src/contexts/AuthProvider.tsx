import React, { useState, useEffect, useMemo } from 'react';
import { AuthContext } from './AuthContext';
import type { UserInfo } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const savedUserInfo = sessionStorage.getItem('kakaotech/userInfo');
    if (savedUserInfo) {
      const userInfoData = JSON.parse(savedUserInfo);
      setUserInfo(userInfoData);
    }
  }, []);

  const login = (email: string) => {
    const newuserInfo = { email };
    setUserInfo(newuserInfo);
    sessionStorage.setItem('kakaotech/userInfo', JSON.stringify(newuserInfo));
  };
  //React 최소상태: isLoggedIn은 useInfo에 종속적이므로 별도 상태없이 변수로 분리했습니다.
  const isLoggedIn = !!userInfo;

  //프로젝트가 어떻게 커질지 몰라 useMemo처리했는데, 멘토님이라면 객체 vs useMemo로 하실지 궁급합니다.
  const value = useMemo(() => ({isLoggedIn, userInfo, login}), [userInfo]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};