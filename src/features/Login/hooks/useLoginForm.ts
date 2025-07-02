import { useState, useEffect } from 'react'

export const useLoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i

  const checkEmail = () => {
    if (!emailTouched) return false

    if (!email) {
      setEmailError('ID를 입력해주세요.')
      return false
    } else if (!emailRegEx.test(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.')
      return false
    }
    setEmailError('')
    return true
  }

  const checkPassword = () => {
    if (!passwordTouched) return false

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.')
      return false
    } else if (password.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.')
      return false
    }
    setPasswordError('')
    return true
  }

  useEffect(() => {
    checkEmail()
  }, [email, emailTouched])

  useEffect(() => {
    checkPassword()
  }, [password, passwordTouched])

  const loginOK = () => {
    return emailRegEx.test(email) && password.length >= 8
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    checkEmail,
    checkPassword,
    loginOK,
    emailTouched,
    setEmailTouched,
    passwordTouched,
    setPasswordTouched,
  }
}
