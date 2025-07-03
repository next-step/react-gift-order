import { colors } from "@/types/theme/palette";
import { typography } from "@/types/theme/typography";
import { spacing } from "@/types/theme/spacing";
import { semantic } from '@/types/theme/semantic.ts';

export const theme = {
  colors,
  typography,
  spacing,
  semantic,
};

export type CustomTheme = typeof theme;
