import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface User {
  email: string;
}

interface LoginContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

// 데이터 유효성 검증 함수
const isValidUser = (data: unknown): data is User => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'email' in data &&
    typeof (data as any).email === 'string' &&
    (data as any).email.length > 0
  );
};

export function LoginProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("user");
    if (stored) {
      try {
        const parsedData = JSON.parse(stored);
        // 데이터 유효성 검증
        if (isValidUser(parsedData)) {
          setUser(parsedData);
        } else {
          console.warn("저장된 사용자 데이터가 유효하지 않습니다:", parsedData);
          sessionStorage.removeItem("user");
          setUser(null);
        }
      } catch (e) {
        console.error("사용자 데이터 파싱 중 오류 발생:", e);
        sessionStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []);

  const login = (userInfo: User) => {
    setUser(userInfo);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext는 LoginProvider 안에서만 사용해야 합니다.");
  }
  return context;
} 