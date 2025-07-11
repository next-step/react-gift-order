import { color_palette, spacing, typography } from "@styles/index";

export const theme = {
  color: color_palette,
  ...spacing,
  typography,
  zIndex: {
    base: 1,
    cardSelector: 100,
    modal: 9999,
  },
};

export type CustomTheme = typeof theme;
