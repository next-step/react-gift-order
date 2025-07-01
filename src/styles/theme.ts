import { colors } from './tokens/color';
import { typography } from './tokens/typography';
import { spacing } from './tokens/spacing';

export const theme = {
  colors,
  typography,
  spacing,
};

export type AppTheme = typeof theme;