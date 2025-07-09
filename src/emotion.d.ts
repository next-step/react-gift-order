import '@emotion/react';
import type { Theme as AppTheme } from '@styles/tokens';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
