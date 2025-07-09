import { useState, useEffect } from "react"
import { AuthContext, type AuthContextType } from "./AuthContext"
import { Cookie } from "@/utils/cookie"

type AuthContextProviderType = {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Cookie.readLoginCookie)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = (email: string, password: string): boolean => {
    if (email && password) {
      setIsLoggedIn(true)
      Cookie.setCookie("isLoggedIn", "true")
      Cookie.setCookie("username", email)
      console.log("login successed")

      return true
    }
    return false
  }

  const logout = () => {
    setEmail("")
    setPassword("")
    setIsLoggedIn(false)
    Cookie.deleteCookie("isLoggedIn")
    Cookie.deleteCookie("username")
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
