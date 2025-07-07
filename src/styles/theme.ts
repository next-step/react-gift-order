import { color_palette, spacing, typography } from "@styles/index";

export const theme = {
  color: color_palette,
  ...spacing,
  typography,
  zIndex: {
    base: 1,
    cardSelector: 100,
    // zIndex 필요하면 더 추가할 예정
  },
};

export type CustomTheme = typeof theme;
