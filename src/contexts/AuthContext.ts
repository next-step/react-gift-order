import { createContext } from "react";

export interface User {
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  authToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
