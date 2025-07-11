export interface User {
  email: string;
  // 나중에 필요하면 더 추가할 수 있음 (name, id 등)
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}
