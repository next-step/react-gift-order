import '@emotion/react';
// 참고 주소 : https://doohyeong.tistory.com/147
// https://velog.io/@yeogenius/React-Emotion.js-%EB%A1%9C-Theme-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
type palette =
  | 'gray00'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'gray1000'
  | 'yellow00'
  | 'yellow100'
  | 'yellow200'
  | 'yellow300'
  | 'yellow400'
  | 'yellow500'
  | 'yellow600'
  | 'yellow700'
  | 'yellow800'
  | 'yellow900'
  | 'yellow1000'
  | 'brown00'
  | 'brown100'
  | 'brown200'
  | 'brown300'
  | 'brown400'
  | 'brown500'
  | 'brown600'
  | 'brown700'
  | 'brown800'
  | 'brown900'
  | 'brown1000'
  | 'blue00'
  | 'blue100'
  | 'blue200'
  | 'blue300'
  | 'blue400'
  | 'blue500'
  | 'blue600'
  | 'blue700'
  | 'blue800'
  | 'blue900'
  | 'blue1000'
  | 'red00'
  | 'red100'
  | 'red200'
  | 'red300'
  | 'red400'
  | 'red500'
  | 'red600'
  | 'red700'
  | 'red800'
  | 'red900'
  | 'red1000';

type symenticPalette =
  | 'kakaoYellow'
  | 'kakaoYellowHover'
  | 'kakaoYellowActive'
  | 'kakaoYellowPressed'
  | 'kakaoBrown'
  | 'kakaoBrownPressed'
  | 'backgroundDefault'
  | 'backgroundDisabled'
  | 'backgroundFill'
  | 'textDefault'
  | 'textSub'
  | 'textDisabled'
  | 'textPlaceholder'
  | 'borderDefault'
  | 'borderDisabled'
  | 'critical'
  | 'criticalBackground'
  | 'info'
  | 'infoBackground';

type typography =
  | 'title1Bold'
  | 'title1Regular'
  | 'title2Bold'
  | 'title2Regular'
  | 'subtitle1Bold'
  | 'subtitle1Regular'
  | 'subtitle2Bold'
  | 'subtitle2Regular'
  | 'body1Bold'
  | 'body1Regular'
  | 'body2Bold'
  | 'body2Regular'
  | 'label1Bold'
  | 'label1Regular'
  | 'label2Bold'
  | 'label2Regular';

type spacing =
  | 'spacing0'
  | 'spacing1'
  | 'spacing2'
  | 'spacing3'
  | 'spacing4'
  | 'spacing5'
  | 'spacing6'
  | 'spacing7'
  | 'spacing8'
  | 'spacing9'
  | 'spacing10'
  | 'spacing11'
  | 'spacing12'
  | 'spacing13'
  | 'spacing14'
  | 'spacing15'
  | 'spacing16';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in palette]: string;
    };
    sementicPalette: {
      [key in sementicPalette]: string;
    };
    typography: {
      [key in typography]: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
    };
    spacing: {
      [key in spacing]: string;
    };
  }
}
