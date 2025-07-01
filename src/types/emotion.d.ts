import '@emotion/react';
import { CustomTheme } from '../styles/theme.ts';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
