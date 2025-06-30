import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      gray: Record<string, string>;
      yellow: Record<string, string>;
      brown: Record<string, string>;
      blue: Record<string, string>;
      red: Record<string, string>;
      semantic: {
        kakaoYellow: string;
        kakaoYellowHover: string;
        kakaoYellowActive: string;
        kakaoYellowPressed: string;
        kakaoBrown: string;
        kakaoBrownPressed: string;
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
        status: {
          critical: string;
          criticalBackground: string;
          info: string;
          infoBackground: string;
        };
      };
    };
    typography: {
      title1Bold: { size: string; weight: number; lineHeight: string };
      title1Regular: { size: string; weight: number; lineHeight: string };
      title2Bold: { size: string; weight: number; lineHeight: string };
      title2Regular: { size: string; weight: number; lineHeight: string };
      subtitle1Bold: { size: string; weight: number; lineHeight: string };
      subtitle1Regular: { size: string; weight: number; lineHeight: string };
      subtitle2Bold: { size: string; weight: number; lineHeight: string };
      subtitle2Regular: { size: string; weight: number; lineHeight: string };
      body1Bold: { size: string; weight: number; lineHeight: string };
      body1Regular: { size: string; weight: number; lineHeight: string };
      body2Bold: { size: string; weight: number; lineHeight: string };
      body2Regular: { size: string; weight: number; lineHeight: string };
      label1Bold: { size: string; weight: number; lineHeight: string };
      label1Regular: { size: string; weight: number; lineHeight: string };
      label2Bold: { size: string; weight: number; lineHeight: string };
      label2Regular: { size: string; weight: number; lineHeight: string };
    };
    spacing: {
      spacing0: string;
      spacing1: string;
      spacing2: string;
      spacing3: string;
      spacing4: string;
      spacing5: string;
      spacing6: string;
      spacing7: string;
      spacing8: string;
      spacing9: string;
      spacing10: string;
      spacing11: string;
      spacing12: string;
      spacing13: string;
      spacing14: string;
      spacing15: string;
      spacing16: string;
    };
  }
}
