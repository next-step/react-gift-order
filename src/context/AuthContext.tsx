import React, { createContext, useState, useEffect, ReactNode } from 'react'

// 1) Context 에 담길 타입 정의
interface User {
  id: string
  name: string
}
interface AuthContextType {
  user: User | null
  token: string | null
  login: (data: { user: User; token: string }) => void
  logout: () => void
}
const saved = sessionStorage.getItem('auth')
const parsed = saved ? JSON.parse(saved) : null
// 2) Context 생성
export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
})

// 3) Provider 컴포넌트
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => parsed?.user ?? null)
  const [token, setToken] = useState<string | null>(() => parsed?.token ?? null)


  const login = ({ user, token }: { user: User; token: string }) => {
    setUser(user)
    setToken(token)
    sessionStorage.setItem('auth', JSON.stringify({ user, token }))
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    sessionStorage.removeItem('auth')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
