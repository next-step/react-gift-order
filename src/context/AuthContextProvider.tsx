import { useState, useEffect } from "react"
import { AuthContext, type AuthContextType } from "./AuthContext"

type AuthContextProviderType = {
  children: React.ReactNode
}
const EXPIRE_DAYS = 7

const readLoginCookie = (): boolean => {
  const c = document.cookie
    .split(";")
    .find((row) => row.trim().startsWith("isLoggedIn="))
  return c ? c.split("=")[1] === "true" : false
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(readLoginCookie)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const setCookie = (
    name: string,
    value: string,
    days: number = EXPIRE_DAYS
  ) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
  }

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
  }

  const login = (email: string, password: string): boolean => {
    if (email && password) {
      setIsLoggedIn(true)
      setCookie("isLoggedIn", "true")
      setCookie("username", email)
      console.log("login successed")

      return true
    }
    return false
  }

  const logout = () => {
    setEmail("")
    setPassword("")
    setIsLoggedIn(false)
    deleteCookie("isLoggedIn")
    deleteCookie("username")
  }

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginCookie = document.cookie
        .split(";")
        .find((row) => row.trim().startsWith("isLoggedIn="))
      const isLoggedIn = loginCookie
        ? loginCookie.split("=")[1] === "true"
        : false
      console.log("Login status:", isLoggedIn)
      setIsLoggedIn(isLoggedIn)
    }

    checkLoginStatus()
  }, [])

  const value: AuthContextType = {
    isLoggedIn,
    email,
    password,
    setIsLoggedIn,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
