import '@emotion/react';
import { theme } from '@/styles/ResetStyles';

type AppTheme = typeof theme;

declare module '@emotion/react' {
  export type Theme = AppTheme;
}
