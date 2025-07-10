import { createContext, useContext } from 'react'
import { useStorageState } from '@/hooks/useStorageState'

interface AuthContextType {
  user: string | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useStorageState<string | null>('user')
  const login = (email: string) => setUser(email)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용되어야 합니다')
  }
  return context
}
