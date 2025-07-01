import "@emotion/react";
import type { ThemeType } from "@/types/ThemeType";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
