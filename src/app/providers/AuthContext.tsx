import { deleteCookie, getCookie, setCookie } from '@/shared/lib/cookieUtils'
import { decodeUserInfo, encodeUserInfo } from '@/shared/lib/encodingUtils'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// * 유저 정보 타입
export type UserInfo = {
  name: string
  email: string
}

// * 인증 컨텍스트 타입
type AuthContextType = {
  user: UserInfo
  setUser: (user: UserInfo) => void
  isLogin: boolean
  setIsLogin: (status: boolean) => void
  isInitialized: boolean
  login: (user: UserInfo) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo>({ name: '', email: '' })
  const [isLogin, setIsLogin] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // * 로그인 정보 가져오기 (암호화된 쿠키)
  // ? 새로고침 시에도 로그인 정보가 유지되도록 함
  useEffect(() => {
    const savedUserInfo = getCookie('userInfo')
    if (savedUserInfo) {
      const decodeUser = decodeUserInfo(savedUserInfo)
      if (decodeUser) {
        setUser(decodeUser)
        setIsLogin(true)
      }
    }
    setIsInitialized(true)
  }, [])

  // * 로그인 함수
  const login = (userInfo: UserInfo) => {
    setUser(userInfo)
    setIsLogin(true)
    // ! 쿠키에 하루 동안 저장
    setCookie('userInfo', encodeUserInfo(userInfo), 1)
  }

  // * 로그아웃 함수
  const logout = () => {
    // ! 유저 정보 초기화
    setUser({ name: '', email: '' })
    setIsLogin(false)
    // ! 쿠키 삭제
    deleteCookie('userInfo')
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLogin, setIsLogin, isInitialized, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// * 인증 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth 는 반드시 AuthProvider 내에서 사용돼야 합니다!')
  }
  return context
}
