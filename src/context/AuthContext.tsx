import React, { createContext, useState, useEffect, ReactNode } from 'react'
const AUTH_STORAGE_KEY = 'auth'

interface User {
  id: string
  name: string
}
interface AuthContextType {
  user: User | null
  token: string | null
  initialized: boolean
  login: (data: { user: User; token: string }) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  initialized: false,
  login: () => {},
  logout: () => {},
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false)

  useEffect(() => {
    const saved = sessionStorage.getItem(AUTH_STORAGE_KEY)
    if (saved) {
      try {
        const { user: u, token: t } = JSON.parse(saved)
        setUser(u)
        setToken(t)
      } catch {
        sessionStorage.removeItem(AUTH_STORAGE_KEY)
      }
    }
    setInitialized(true)
  }, [])


  const login = ({ user, token }: { user: User; token: string }) => {
    setUser(user)
    setToken(token)
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user, token }))
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ user, token, initialized, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
