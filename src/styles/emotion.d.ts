import '@emotion/react';
import { palette, typography } from './theme';

type Palette = typeof palette;
type Typography = typeof typography;

declare module '@emotion/react' {
  export interface Theme {
    palette: Palette;
    typography: Typography;
  }
}