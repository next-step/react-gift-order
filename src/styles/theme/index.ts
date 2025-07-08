import { colors, semanticColors } from "@/styles/theme/colors";
import { typography } from "@/styles/theme/typography";
import { spacing } from "@/styles/theme/spacing";
import { layout } from "./layout";
import { borderRadius } from "./borderRadius";
import { zIndex } from "./zIndex";

export const theme = {
  colors: {
    ...colors,
    ...semanticColors,
  },
  typography,
  spacing,
  layout,
  borderRadius,
  zIndex,

  components: {
    navigationBar: {
      height: "3rem",
    },
    form: {
      focusBorderColor: "rgb(78, 78, 78)",
    },
    modal: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },
} as const;

// 명시적 타입 계산
type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

export default theme;
