import { useState, useMemo } from 'react'

export function useSender() {
  const [sender, setSender] = useState('')

  const error = useMemo(() => {
    if (!sender) return '보내는 사람 이름을 입력해주세요.'
    return ''
  }, [sender])

  return { value: sender, set: setSender, error }
}
