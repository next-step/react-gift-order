import '@emotion/react';

import type { ColorScaleType, SemanticColorsType, TypographyType, SpacingType } from './tokens';

declare module '@emotion/react' {
  export interface Theme {
    colorScale: ColorScaleType;
    semanticColors: SemanticColorsType;
    typography: TypographyType;
    spacing: SpacingType;
  }
}
