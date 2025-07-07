import { createContext,  useContext,  useEffect, useState, type ReactNode } from "react";

interface User {
  username: string;
  isLoggedIn: boolean;
}
 export interface AuthContextType {
    user:User;
    setUser:(user:User)=>void
}
export const AuthContext = createContext<AuthContextType|null>(null);


export default function AuthProvider({ children }:{children:ReactNode}) {
  const [user, setUser] = useState({ username: "", isLoggedIn: false });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  // if (loading) return null;
  return (
    <AuthContext.Provider value={{ user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 <AuthProvider> 내부에서만 사용 가능합니다.");
  }
  return context;
};

