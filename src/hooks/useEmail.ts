import { useMemo, useState } from 'react'

export function useEmail() {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const error = useMemo(() => {
    if (!value) return 'ID를 입력해주세요.'
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    if (!isEmailValid) return 'ID는 이메일 형식으로 입력해주세요.'
    return ''
  }, [value])

  return {
    value,
    change: setValue,
    touched,
    error,
    onBlur: () => setTouched(true),
  }
}
