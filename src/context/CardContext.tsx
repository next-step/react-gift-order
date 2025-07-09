import { createContext } from "react"

export interface CardTheme {
  id: number
  thumbUrl: string
  imageUrl: string
  defaultTextMessage: string
}
export const CardContext = createContext<CardTheme[]>([])
