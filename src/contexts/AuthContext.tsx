import { deepFreeze } from "@/utils/deepFreeze";
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
}

type LoggedInState = {
  user: User;
  isLoggedIn: true;
  login: (email: string) => void;
  logout: () => void;
};

type LoggedOutState = {
  user: null;
  isLoggedIn: false;
  login: (email: string) => void;
  logout: () => void;
};

type AuthContextType = LoggedInState | LoggedOutState;

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

  const value: AuthContextType = user
    ? {
        user,
        login,
        logout,
        isLoggedIn: true,
      }
    : {
        user: null,
        login,
        logout,
        isLoggedIn: false,
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
