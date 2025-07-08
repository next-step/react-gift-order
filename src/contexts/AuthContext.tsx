import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextValue {
  isLoggedIn: boolean
  userEmail: string | null
  login: (email: string) => void
  logout: () => void

}
const STORAGE_KEY = 'isLoggedIn'
const EMAIL_KEY = 'userEmail'

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    return stored === 'true'
  })
    const [userEmail, setUserEmail] = useState<string | null>(() => {
    return sessionStorage.getItem(EMAIL_KEY)
  })

  const login = (email: string) => {
    setIsLoggedIn(true)
    setUserEmail(email)
    sessionStorage.setItem(STORAGE_KEY, 'true')
    sessionStorage.setItem(EMAIL_KEY, email)

  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserEmail(null)
    sessionStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem(EMAIL_KEY)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
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