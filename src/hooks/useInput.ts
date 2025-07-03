import { validateValue, type Rule } from '@/utils/validateValue'
import { useState } from 'react'

// * input 커스텀 훅
// * 초기값, 유효성 검사 함수 전달 받음
export const useInput = (initialValue: string, rule: Rule) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)
  const [isBlurred, setIsBlurred] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    // * blur된 상태에서는 실시간으로 에러 업데이트
    if (isBlurred) {
      const newError = validateValue(newValue, rule)
      setError(newError)
    }
  }

  // * Blur 시 유효성 검사 실행
  const handleBlur = () => {
    setIsBlurred(true)
    const errorMessage = validateValue(value, rule)
    setError(errorMessage)
  }

  // * 유효성 여부 (버튼 활성화용)
  const isValid = validateValue(value, rule) === null

  return { value, error, handleChange, handleBlur, isValid }
}
