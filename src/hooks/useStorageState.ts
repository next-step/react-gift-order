import { useState } from 'react'

export function useStorageState<T>(
  key: string
): [T | null, (value: T | null) => void] {
  const [value, setValue] = useState<T | null>(() => {
    return (localStorage.getItem(key) as T) || null
  })

  const updateValue = (value: T | null) => {
    if (value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
    setValue(value)
  }

  return [value, updateValue]
}
