import { useRef, useState } from 'react'

export function useEmailInput() {
  const emailRef = useRef<HTMLInputElement>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  const validateEmail = (email: string) => {
    if (!email) return 'ID를 입력해 주세요.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return '이메일 형식이 올바르지 않습니다.'
    return null
  }

  const handleEmailBlur = () => {
    const email = emailRef.current?.value || ''
    setEmailError(validateEmail(email))
  }

  const checkAndSetError = () => {
    const email = emailRef.current?.value || ''
    const error = validateEmail(email)
    setEmailError(error)
    return error
  }

  return { emailRef, emailError, handleEmailBlur, checkAndSetError }
}