import { color } from '@/styles/tokens/color';
import { spacing } from '@/styles/tokens/spacing';
import { typography } from '@/styles/tokens/typography';

export const theme = {
  color,
  spacing,
  typography,
} as const;

export type Theme = typeof theme;
