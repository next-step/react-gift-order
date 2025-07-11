import { useInput } from './useInput'

function validateEmail(value: string) {
  if (!value) return 'ID를 입력해주세요.'
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  if (!isEmailValid) return 'ID는 이메일 형식으로 입력해주세요.'
  return ''
}

export function useEmail() {
  return useInput(validateEmail)
}
