import { createContext, useContext, useEffect, useState } from 'react';

interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (loginInfo: LoginCredentials) => boolean;
  logout: () => void;
  isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setIsInitialized(true);
  }, []);

  const login = ({ email, password }: LoginCredentials): boolean => {
    //임시 검증 로직
    if (email && password) {
      const userData: User = {
        name: email.split('@')[0],
        email,
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
