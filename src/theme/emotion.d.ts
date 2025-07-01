import '@emotion/react';

import type {
  ColorScaleType,
  SemanticColorsType,
  TypographyType,
  SpacingTokensType,
} from './tokens';

declare module '@emotion/react' {
  export interface Theme {
    colorScale: ColorScaleType;
    semanticColors: SemanticColorsType;
    typography: TypographyType;
    spacing: SpacingTokensType;
  }
}
