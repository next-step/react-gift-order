// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react'

// 1) Context 에 담길 타입 정의
interface User {
  id: string
  name: string
}
interface AuthContextType {
  user: User | null
  token: string | null
  initialized: boolean               // ← 복원 완료 여부
  login: (data: { user: User; token: string }) => void
  logout: () => void
}

// 2) Context 생성 (초기값에 initialized=false 포함)
export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  initialized: false,
  login: () => {},
  logout: () => {},
})

// 3) Provider 컴포넌트
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false)

  // 세션스토리지에서 복원
  useEffect(() => {
    const saved = sessionStorage.getItem('auth')
    if (saved) {
      try {
        const { user: u, token: t } = JSON.parse(saved)
        setUser(u)
        setToken(t)
      } catch {
        sessionStorage.removeItem('auth')
      }
    }
    setInitialized(true)
  }, [])

  // (디버깅용) 언제 복원/변경되는지 로그
  useEffect(() => {
    console.log('AuthContext ▶︎', { user, token, initialized })
  }, [user, token, initialized])

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
    <AuthContext.Provider value={{ user, token, initialized, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
