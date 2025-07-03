import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateEmail(value: string) {
  return emailRegex.test(value)
}

function validatePassword(value: string) {
  return value.length >= 8
}

export default function useLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isValid, setIsValid] = useState(false)

  const checkValidity = () => {
    setIsValid(validateEmail(email) && validatePassword(password))
  }

  const handleEmailBlur = () => {
    if (validateEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('유효한 이메일 주소를 입력하세요.')
    }
    checkValidity()
  }

  const handlePasswordBlur = () => {
    if (validatePassword(password)) {
      setPasswordError('')
    } else {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.')
    }
    checkValidity()
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    handleEmailBlur,
    handlePasswordBlur,
    isValid,
  }
}