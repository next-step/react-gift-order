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
    setIsValid(!!email && validateEmail(email) && validatePassword(password))  }

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('ID를 입력해주세요.')
    } else if (!validateEmail(email)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.')
    } else {
      setEmailError('잘못된 접근입니다.')
    }
    checkValidity()
  }

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.')
    } 
    else if (!validatePassword(password)) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.')
    }    
    else {
      setPasswordError('잘못된 접근입니다.')
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