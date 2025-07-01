import { useState } from 'react'

export function useLoginForm() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateEmail = (value: string) => {
    if (!value.trim()) return 'ID를 입력해주세요.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.'
    return ''
  }

  const validatePassword = (value: string) => {
    if (!value.trim()) return 'PW를 입력해주세요.'
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.'
    return ''
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setEmailError(validateEmail(value))
  }

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setPasswordError(validatePassword(value))
  }

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password))
  }

  const isFormValid = validateEmail(email) === '' && validatePassword(password) === ''

  return {
    email,
    emailError,
    password,
    passwordError,
    handleEmailChange,
    handleEmailBlur,
    handlePasswordChange,
    handlePasswordBlur,
    isFormValid
  }
}
