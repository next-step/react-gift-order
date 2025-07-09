import '@emotion/react';

declare module '@emotion/react' {
  export type FontToken = {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  export interface Theme {
    colors: {
      gray: Record<`gray${number}`, string>;
      yellow: Record<`yellow${number}`, string>;
      brown: Record<`brown${number}`, string>;
      blue: Record<`blue${number}`, string>;
      red: Record<`red${number}`, string>;
      brand: {
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

    typography: {
      title: {
        title1Bold: FontToken;
        title1Regular: FontToken;
        title2Bold: FontToken;
        title2Regular: FontToken;
      };
      subtitle: {
        subtitle1Bold: FontToken;
        subtitle1Regular: FontToken;
        subtitle2Bold: FontToken;
        subtitle2Regular: FontToken;
      };
      body: {
        body1Bold: FontToken;
        body1Regular: FontToken;
        body2Bold: FontToken;
        body2Regular: FontToken;
      };
      label: {
        label1Bold: FontToken;
        label1Regular: FontToken;
        label2Bold: FontToken;
        label2Regular: FontToken;
      };
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
