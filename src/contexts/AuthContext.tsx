import { deepFreeze } from "@/utils/deepFreeze";
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEYS = deepFreeze({
  USER: "kakao_gift_user",
} as const);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem(SESSION_KEYS.USER);
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("sessionStorage 로드 실패:", error);
        sessionStorage.removeItem(SESSION_KEYS.USER);
      }
    }
  }, []);

  const login = (email: string) => {
    const newUser: User = { email };

    setUser(newUser);
    sessionStorage.setItem(SESSION_KEYS.USER, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem(SESSION_KEYS.USER);
  };

  const isLoggedIn = user !== null;

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthProvider 안에서 사용해야 합니다.");
  }
  return context;
}
