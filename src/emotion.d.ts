import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      gray00: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray600: string;
      gray800: string;
      gray1000: string;
      yellow00: string;
      yellow600: string;
      yellow800: string;
      blue00: string;
      blue200: string;
      blue500: string;
      kakaoYellow: string;
      kakaoYellowHover: string;
      kakaoYellowActive: string;
      kakaoYellowPressed: string;
      default: string; //기본배경색
      textDefault: string; //기본 텍스트 색상
      textSub: string; //보조 텍스트 색상
    };
    typography: {
      title1Regular: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      subtitle1Regular: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body2Regular: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
    };
  }
}
