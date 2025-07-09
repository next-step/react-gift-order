import { createContext, useContext } from "react"
import type { ValueType } from "@/interfaces/ValueType"

export interface AuthContextType extends ValueType {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
  login: (email: string, password: string) => boolean
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth는 반드시 provider안에 있어야 함")
  }
  return context
}
