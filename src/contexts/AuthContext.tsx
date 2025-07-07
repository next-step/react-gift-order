import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextValue {
  isLoggedIn: boolean
  login: () => void
  logout: () => void

}
const STORAGE_KEY = 'isLoggedIn'

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    return stored === 'true'
  })

  const login = () => {
    setIsLoggedIn(true)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }

  const logout = () => {
    setIsLoggedIn(false)
    sessionStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}