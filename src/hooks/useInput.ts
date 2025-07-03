import { useState } from 'react'

// * input 커스텀 훅
// * 초기값, 유효성 검사 함수 전달 받음
export const useInput = (initialValue: string, validate?: (value: string) => string | null) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)
  const [isBlurred, setIsBlurred] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    // * 유효성 검사 함수가 있으면 실행
    if (isBlurred && validate) {
      const errorMessage = validate(e.target.value)
      setError(errorMessage)
    }
  }

  // * Blur 시 유효성 검사 실행
  const handleBlur = () => {
    setIsBlurred(true)
    if (validate) {
      const errorMessage = validate(value)
      setError(errorMessage)
    }
  }

  // * 유효성 검사 결과
  const isValid = !error

  return { value, error, handleChange, handleBlur, isValid }
}
