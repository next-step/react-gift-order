import { useRef, useState } from 'react'

export function usePasswordInput() {
  const passwordRef = useRef<HTMLInputElement>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const validatePassword = (pw: string) => {
    if (!pw) return 'PW를 입력해주세요.'
    if (pw.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.'
    return null
  }

  const handlePasswordBlur = () => {
    const pw = passwordRef.current?.value || ''
    setPasswordError(validatePassword(pw))
  }

  const checkAndSetError = () => {
    const pw = passwordRef.current?.value || ''
    const error = validatePassword(pw)
    setPasswordError(error)
    return error
  }

  return { passwordRef, passwordError, handlePasswordBlur, checkAndSetError }
}
