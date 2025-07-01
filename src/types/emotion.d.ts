import "@emotion/react";
import { EmotionTheme } from "@/styles/theme";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
}
