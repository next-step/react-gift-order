import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      gray: Record<number, string>;
      yellow: Record<number, string>;
      brown: Record<number, string>;
      blue: Record<number, string>;
      red: Record<number, string>;
      semantic: {
        kakaoYellow: string;
        kakaoYellowHover: string;
        kakaoYellowActive: string;
        kakaoYellowPressed: string;
        kakaoBrown: string;
        kakaoBrownPressed: string;
      };
      background: {
        default: string;
        disabled: string;
        fill: string;
      };
      text: {
        default: string;
        sub: string;
        disabled: string;
        placeholder: string;
      };
      border: {
        default: string;
        disabled: string;
      };
      state: {
        critical: string;
        criticalBackground: string;
        info: string;
        infoBackground: string;
      };
    };
    spacing: Record<number, string>;
    typography: {
      [key: string]: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
    };
  }
}

