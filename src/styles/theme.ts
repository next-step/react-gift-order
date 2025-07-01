import { colors, semanticColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

export const theme = {
  colors,
  semantic: semanticColors,
  typography,
  spacing,
} as const;