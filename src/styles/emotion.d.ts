import '@emotion/react';
import { theme } from './theme/theme'; // 경로는 정확히 맞춰주세요

type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}