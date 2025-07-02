import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof import('../constants/theme').colors;
    sementicColors: typeof import('../constants/theme').sementicColors;
    backgroundColors: typeof import('../constants/theme').backgroundColors;
    textColors: typeof import('../constants/theme').textColors;
    borderColors: typeof import('../constants/theme').borderColors;
    stateColors: typeof import('../constants/theme').stateColors;
    typography: typeof import('../constants/theme').typography;
    spacing: typeof import('../constants/theme').spacing;
  }
}
