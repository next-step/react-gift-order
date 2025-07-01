import { createContext } from "react"

interface PresentTheme {
  themeId: number
  name: string
  image: string
}
export const PresentThemeContext = createContext<PresentTheme[]>([])
