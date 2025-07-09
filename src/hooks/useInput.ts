import { useRef, useState } from 'react'

export function useInput(validate: (value: string) => string | null) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)

  const [value, setValue] = useState<string>('') // 입력값 상태 추가

  const handleBlur = () => {
    const currentValue = inputRef.current?.value || ''
    setError(validate(currentValue))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    
    // 실시간 검증 - 항상 수행
    setError(validate(newValue))
  }

  const checkAndSetError = () => {
    const currentValue = inputRef.current?.value || ''
    const err = validate(currentValue)
    setError(err)
  }

  return { 
    inputRef, 
    error, 
    value, 
    handleBlur, 
    handleChange, 
    checkAndSetError 
  }
}

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