import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthContextType } from '@/types/auth';
import {
  saveAuthToStorage,
  loadAuthFromStorage,
  removeAuthFromStorage,
} from '@/utils/storage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // 초기 로딩은 true로 시작

  const isAuthenticated = !!user;

  // 컴포넌트 마운트 시 localStorage에서 사용자 정보 복원
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedUser = loadAuthFromStorage();
        if (savedUser) {
          setUser(savedUser);
        }
      } catch (error) {
        console.error('인증 정보 초기화 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, _password: string): Promise<void> => {
    setLoading(true);

    try {
      // 실제 API 호출 대신 간단한 검증
      // 현재는 이메일과 비밀번호가 유효하면 로그인 성공으로 처리
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 시뮬레이션

      const userData: User = {
        email,
      };

      setUser(userData);
      saveAuthToStorage(userData); // localStorage에 저장
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    removeAuthFromStorage(); // localStorage에서 삭제
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
