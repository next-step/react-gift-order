import { useState } from 'react'

export function useLoginForm() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const MIN_PASSWORD_LENGTH = 8;

  const validateEmail = (value: string) => {
    if (!value.trim()) return 'ID를 입력해주세요.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.'
    return ''
  }

  const validatePassword = (value: string) => {
    if (!value.trim()) return 'PW를 입력해주세요.'
    if (value.length < MIN_PASSWORD_LENGTH) return 'PW는 최소 8글자 이상이어야 합니다.'
    return ''
  }

  const changeEmail = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value)
    setEmailError(validateEmail(value))
  }

  const notFocusEmail = () => {
    setEmailError(validateEmail(email))
  }

  const changePassword = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value)
    setPasswordError(validatePassword(value))
  }

  const notFocusPassword = () => {
    setPasswordError(validatePassword(password))
  }

  const isFormValid = validateEmail(email) === '' && validatePassword(password) === ''

  return {
    email,
    emailError,
    password,
    passwordError,
    changeEmail,
    notFocusEmail,
    changePassword,
    notFocusPassword,
    isFormValid
  }
}