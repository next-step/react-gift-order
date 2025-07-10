import { useState, useMemo } from 'react'

export function usePassword() {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const error = useMemo(() => {
    if (!value) return 'PW를 입력해주세요.'
    if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.'
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
