import { useRef, useState } from 'react'

export function useInput(validate: (value: string) => string | null) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)

  const handleBlur = () => {
    const value = inputRef.current?.value || ''
    setError(validate(value))
  }

  const checkAndSetError = () => {
    const value = inputRef.current?.value || ''
    const err = validate(value)
    setError(err)
    return err
  }

  return { inputRef, error, handleBlur, checkAndSetError }
}

// 검증 함수도 함께 export
export const validateEmail = (email: string) => {
  if (!email) return 'ID를 입력해 주세요.'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return '이메일 형식이 올바르지 않습니다.'
  return null
}

export const validatePassword = (pw: string) => {
  if (!pw) return 'PW를 입력해주세요.'
  if (pw.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.'
  return null
}