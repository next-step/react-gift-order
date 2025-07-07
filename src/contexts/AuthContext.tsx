import { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
}

type AuthState =
  | { user: null; isLoggedIn: false }
  | { user: User; isLoggedIn: true };

type AuthContextType = AuthState & {
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEYS = {
  USER: "kakao_gift_user",
} as const;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoggedIn: false,
  });

  useEffect(() => {
    const savedUser = sessionStorage.getItem(SESSION_KEYS.USER);
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setAuthState({
          user: parsedUser,
          isLoggedIn: true,
        });
      } catch (error) {
        console.error("sessionStorage 로드 실패:", error);
        sessionStorage.removeItem(SESSION_KEYS.USER);
      }
    }
  }, []);

  const login = (email: string) => {
    const newUser: User = { email };

    setAuthState({
      user: newUser,
      isLoggedIn: true,
    });
    sessionStorage.setItem(SESSION_KEYS.USER, JSON.stringify(newUser));
  };

  const logout = () => {
    setAuthState({
      user: null,
      isLoggedIn: false,
    });
    sessionStorage.removeItem(SESSION_KEYS.USER);
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
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
