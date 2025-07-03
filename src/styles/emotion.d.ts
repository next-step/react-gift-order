import "@emotion/react";
import type { AppTheme } from "@/styles/theme/index";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
