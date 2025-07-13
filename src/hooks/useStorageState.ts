import { useEffect, useState } from 'react'

export function useStorageState<T>(
  key: string
): [T | null, (value: T | null) => void] {
  const [value, setValue] = useState<T | null>(() => {
    const stored = localStorage.getItem(key)
    try {
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          setValue(event.newValue ? JSON.parse(event.newValue) : null)
        } catch {
          setValue(null)
        }
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [key])

  const updateValue = (newValue: T | null) => {
    if (newValue === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
    setValue(newValue)

    window.dispatchEvent(
      new StorageEvent('storage', {
        key,
        newValue: newValue === null ? null : JSON.stringify(newValue),
      })
    )
  }

  return [value, updateValue]
}
