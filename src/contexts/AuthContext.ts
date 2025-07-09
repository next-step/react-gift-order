import { createContext, useContext } from 'react';

export interface UserInfo {
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  login: (email: string, onSuccess?: () => void) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthProvider 내부사용 필요');
  }
  return context;
};
