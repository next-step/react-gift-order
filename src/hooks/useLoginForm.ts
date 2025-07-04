import { useMemo, useState } from 'react'

export function useLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const isEmailValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const isPasswordValid = (value: string) => value.length >= 8

  const emailError = useMemo(() => {
    if (!email) return 'ID를 입력해주세요.'
    if (!isEmailValid(email)) return 'ID는 이메일 형식으로 입력해주세요.'
    return ''
  }, [email])

  const passwordError = useMemo(() => {
    if (!password) return 'PW를 입력해주세요.'
    if (!isPasswordValid(password)) return 'PW는 최소 8글자 이상이어야 합니다.'
    return ''
  }, [password])

  const isFormValid = useMemo(() => {
    return isEmailValid(email) && isPasswordValid(password)
  }, [email, password])

  return {
    email: {
      value: email,
      change: setEmail,
      error: emailError,
      touched: emailTouched,
      onBlur: () => setEmailTouched(true),
    },
    password: {
      value: password,
      change: setPassword,
      error: passwordError,
      touched: passwordTouched,
      onBlur: () => setPasswordTouched(true),
    },
    validForm: isFormValid,
  }
}
