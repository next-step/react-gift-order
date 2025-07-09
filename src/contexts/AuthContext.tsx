import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthContextType } from '@/types/auth';
import { useLocalStorageState } from '@/hooks';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorageState<User | null>(
    'kakao-gift-auth',
    null
  );
  const [loading, setLoading] = useState(false); // useLocalStorageState는 동기 초기화되므로 loading 불필요

  const isAuthenticated = !!user;

  const login = async (email: string, _password: string): Promise<void> => {
    setLoading(true);

    try {
      // 실제 API 호출 대신 간단한 검증
      // 현재는 이메일과 비밀번호가 유효하면 로그인 성공으로 처리
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 시뮬레이션

      const userData: User = {
        email,
      };

      setUser(userData); // useLocalStorageState가 자동으로 localStorage에 저장
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null); // useLocalStorageState가 자동으로 localStorage에서 삭제
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
