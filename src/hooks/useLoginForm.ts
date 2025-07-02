import { useState } from 'react'

export function useLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const isEmailValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const isPasswordValid = (value: string) => value.length >= 8

  const validateEmail = (value: string) => {
    setEmailTouched(true)
    if (!value) {
      setEmailError('ID를 입력해주세요.')
    } else if (!isEmailValid(value)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = (value: string) => {
    setPasswordTouched(true)
    if (!value) {
      setPasswordError('PW를 입력해주세요.')
    } else if (!isPasswordValid(value)) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.')
    } else {
      setPasswordError('')
    }
  }

  const isFormValid = isEmailValid(email) && isPasswordValid(password)

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    emailTouched,
    passwordTouched,
    validateEmail,
    validatePassword,
    isFormValid,
    setEmailTouched,
    setPasswordTouched,
  }
}
