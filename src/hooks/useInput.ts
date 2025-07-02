import { useState } from 'react'

export const useInput = (
  initialValue: string,
  validate: (value: string) => string
) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (touched) setError(validate(e.target.value))
  }

  const onBlur = () => {
    setTouched(true)
    setError(validate(value))
  }

  const isValid = !error && touched

  return { value, error, onChange, onBlur, isValid }
}
