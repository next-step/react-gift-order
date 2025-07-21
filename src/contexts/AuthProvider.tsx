import { useState, useEffect, type ReactNode } from "react";
import { AuthContext, type AuthContextType, type User } from "./AuthContext";
import { loginApi } from "../api/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (storedAuthToken && storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setAuthToken(storedAuthToken);
        setUser(parsedUser);
      } catch (e) {
        console.error("Failed to parse stored user data:", e);

        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await loginApi(email, password);
      setAuthToken(data.authToken);
      setUser({ email: data.email, name: data.name });

      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: data.email, name: data.name })
      );
    } catch (error) {
      setUser(null);
      setAuthToken(null);
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error("알 수 없는 로그인 오류가 발생했습니다.");
      }
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setAuthToken(null);
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Failed to logout from server:", error);
      setUser(null);
      setAuthToken(null);
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    }
  };

  const contextValue: AuthContextType = {
    user,
    authToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
