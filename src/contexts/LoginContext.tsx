import { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextType {
  isLogined: boolean;
  setIsLogined: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogined, setIsLogined] = useState(false);

  return <AuthContext.Provider value={{ isLogined, setIsLogined }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
