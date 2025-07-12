import { createContext, useState, useContext, useEffect, useMemo, useCallback, type ReactNode } from 'react';

// 사용자 정보 타입 정의
interface User {
  email: string;
  nickname: string;
}

// 인증 컨텍스트의 값 타입 정의
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// 초기값으로 빈 객체 생성
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// 컨텍스트 Provider 컴포넌트 타입 정의
interface AuthProviderProps {
  children: ReactNode;
}

// localStorage 키
const USER_STORAGE_KEY = 'kakao_user';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // 사용자 정보 상태
  const [user, setUser] = useState<User | null>(null);
  
  // 인증 상태 계산 (user가 존재하면 true)
  const isAuthenticated = !!user;

  // 컴포넌트 마운트 시 localStorage에서 사용자 정보 불러오기
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        // 잘못된 JSON 형식일 경우 localStorage 데이터 삭제
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  // 로그인 처리 (useCallback으로 메모이제이션)
  const login = useCallback((email: string) => {

    const newUser = { email, nickname: email.split('@')[0] };
    
    // 사용자 정보 업데이트
    setUser(newUser);
    
    // localStorage에 사용자 정보 저장
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));

  }, []);

  // 로그아웃 처리 (useCallback으로 메모이제이션)
  const logout = useCallback(() => {

    // 사용자 정보 초기화
    setUser(null);
    
    // localStorage에서 사용자 정보 삭제
    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);


  // 컨텍스트 값 정의
  const value = useMemo(() => ({
    user,
    isAuthenticated,
    login,
    logout,
  }), [user, isAuthenticated, login, logout]);

  // Provider로 자식 컴포넌트 감싸기
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// 커스텀 훅: useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};
