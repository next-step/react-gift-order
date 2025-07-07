import { createContext } from 'react';
import type { User } from '@/hooks/useAuth';

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
