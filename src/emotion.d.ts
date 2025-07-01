import "@emotion/react"
import { AppTheme } from "./styles/theme/index";

declare module "@emotion/react" {
  export interface Theme  {
    colors: AppTheme["colors"];
    typography: AppTheme["typography"];
    spacing: AppTheme["spacing"];
  }
}
