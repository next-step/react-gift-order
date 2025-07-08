import { createContext, useContext, useState } from 'react'

import type { ReactNode } from 'react'

interface User {
  email: string
  nickname: string
}

interface UserContextType {
  isLoggedIn: boolean
  user: User | null
  login: (userInfo: User) => void
  logout: () => void
}

const STORAGE_KEY = {
  IS_LOGGED_IN: 'isLoggedIn',
  USER: 'user',
}

const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const storedLogin =
    sessionStorage.getItem(STORAGE_KEY.IS_LOGGED_IN) === 'true'
  const storedUser = sessionStorage.getItem(STORAGE_KEY.USER)

  const [isLoggedIn, setIsLoggedIn] = useState(storedLogin)
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  )

  const login = (userInfo: User) => {
    sessionStorage.setItem(STORAGE_KEY.IS_LOGGED_IN, 'true')
    sessionStorage.setItem(STORAGE_KEY.USER, JSON.stringify(userInfo))
    setIsLoggedIn(true)
    setUser(userInfo)
  }

  const logout = () => {
    sessionStorage.clear()
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUserContext는 UserProvider 안에서만 사용')
  return context
}
