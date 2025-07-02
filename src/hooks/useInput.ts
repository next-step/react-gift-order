import { useState } from "react"
import type { ValueType } from "@/interfaces/ValueType"
import type { ChangeEvent } from "react"

export const useInput = <T extends ValueType>(
  initialValue: T
): [T, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [data, setData] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  return [data, onChange]
}
