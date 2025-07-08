import React, { useState, useMemo, useCallback } from 'react';
import { AuthContext } from './AuthContext';
import type { UserInfo } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
    const savedUserInfo = sessionStorage.getItem('kakaotech/userInfo');
    if (savedUserInfo) {
      try {
        return JSON.parse(savedUserInfo);
      } catch {
        sessionStorage.removeItem('kakaotech/userInfo');
        return null;
      }
    }
    return null;
  });

  const login = useCallback((email: string, onSuccess?: () => void) => {
    const newuserInfo = { email };
    setUserInfo(newuserInfo);
    sessionStorage.setItem('kakaotech/userInfo', JSON.stringify(newuserInfo));

    if (onSuccess) {
      setTimeout(onSuccess, 0);
    }
  }, []);

  const logout = useCallback(() => {
    setUserInfo(null);
    sessionStorage.removeItem('kakaotech/userInfo');
  }, []);

  const isLoggedIn = !!userInfo;

  //리뷰 반영 : 의존성배열에 모두 추가
  const value = useMemo(() => ({ isLoggedIn, userInfo, login, logout }), [userInfo, isLoggedIn, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};