import { useMemo, useState } from 'react'

export function useInput(validate: (value: string) => string) {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const error = useMemo(() => validate(value), [value, validate])

  return {
    value,
    change: setValue,
    touched,
    error,
    onBlur: () => setTouched(true),
  }
}
