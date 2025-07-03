import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";

const theme = {
  colors,
  typography,
  spacing,
};

export type AppTheme = typeof theme;
export default theme;
