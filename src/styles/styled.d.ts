import '@emotion/react';
import type { AppTheme } from '@/styles/theme';
import 'styled-components';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
