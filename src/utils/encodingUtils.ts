import type { UserInfo } from '@/contexts/AuthContext'

// * 유저 정보 암호화
// ? 조금이라도 보안성을 주기 위해 간단한 Base64 인코딩 적용
export const encodeUserInfo = (userInfo: UserInfo) => {
  return btoa(JSON.stringify(userInfo))
}

// * 유저 정보 복호화
export const decodeUserInfo = (encodedInfo: string): UserInfo | null => {
  try {
    return JSON.parse(atob(encodedInfo))
  } catch {
    return null
  }
}
