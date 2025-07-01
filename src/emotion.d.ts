import "@emotion/react"
import { theme as myTheme } from "./styles/theme"

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof myTheme.colors
    Typography: typeof myTheme.Typography
    space: typeof myTheme.space
  }
}
