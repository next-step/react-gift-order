import { color_palette, spacing, typography } from "@styles/index";

export const theme = {
  color: color_palette,
  ...spacing,
  typography,
};

export type CustomTheme = typeof theme;
