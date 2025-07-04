interface ThemeColors {
  // Gray 계열
  gray00: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  gray1000: string;

  // Yellow 계열 (카카오 브랜드 컬러)
  yellow00: string;
  yellow100: string;
  yellow200: string;
  yellow300: string;
  yellow400: string;
  yellow500: string;
  yellow600: string;
  yellow700: string;
  yellow800: string;
  yellow900: string;
  yellow1000: string;

  // Brown 계열
  brown00: string;
  brown100: string;
  brown200: string;
  brown300: string;
  brown400: string;
  brown500: string;
  brown600: string;
  brown700: string;
  brown800: string;
  brown900: string;
  brown1000: string;

  // Blue 계열
  blue00: string;
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
  blue900: string;
  blue1000: string;

  // Red 계열
  red00: string;
  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;
  red700: string;
  red800: string;
  red900: string;
  red1000: string;

  // 시맨틱 컬러
  kakaoYellow: string;
  kakaoYellowHover: string;
  kakaoYellowActive: string;
  kakaoYellowPressed: string;
  kakaoBrown: string;
  kakaoBrownPressed: string;

  // 배경 컬러
  default: string;
  disabled: string;
  fill: string;

  // 텍스트 컬러
  textDefault: string;
  textSub: string;
  textDisabled: string;
  textPlaceholder: string;

  // 테두리 컬러
  borderDefault: string;
  borderDisabled: string;

  // 상태 컬러
  critical: string;
  criticalBackground: string;
  info: string;
  infoBackground: string;
}

interface TypographyStyle {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}

interface ThemeTypography {
  title1Bold: TypographyStyle;
  title1Regular: TypographyStyle;
  title2Bold: TypographyStyle;
  title2Regular: TypographyStyle;
  subtitle1Bold: TypographyStyle;
  subtitle1Regular: TypographyStyle;
  subtitle2Bold: TypographyStyle;
  subtitle2Regular: TypographyStyle;
  body1Bold: TypographyStyle;
  body1Regular: TypographyStyle;
  body2Bold: TypographyStyle;
  body2Regular: TypographyStyle;
  label1Bold: TypographyStyle;
  label1Regular: TypographyStyle;
  label2Bold: TypographyStyle;
  label2Regular: TypographyStyle;
}

interface ThemeSpacing {
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
}

interface ThemeBreakpoints {
  desktop: number;
}
interface ThemeLogo {
  width: number;
  height: number;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  logo: ThemeLogo;
}

export const theme: Theme = {
  colors: {
    // Gray 계열
    gray00: '#ffffff',
    gray100: '#f7f8f9',
    gray200: '#f3f4f5',
    gray300: '#eeeff1',
    gray400: '#dcdee3',
    gray500: '#d1d3d8',
    gray600: '#b0b3ba',
    gray700: '#868b94',
    gray800: '#555d6d',
    gray900: '#2a3038',
    gray1000: '#1a1c20',

    // Yellow 계열 (카카오 브랜드 컬러)
    yellow00: '#fffef9',
    yellow100: '#fffce5',
    yellow200: '#fff8b7',
    yellow300: '#fff38a',
    yellow400: '#ffef5c',
    yellow500: '#ffea2e',
    yellow600: '#fee500',
    yellow700: '#d5c000',
    yellow800: '#ac9b00',
    yellow900: '#847700',
    yellow1000: '#5b5200',

    // Brown 계열
    brown00: '#fff9f4',
    brown100: '#ffeedc',
    brown200: '#ffe2c4',
    brown300: '#f9d0a8',
    brown400: '#edbc8a',
    brown500: '#cb9a69',
    brown600: '#a97b4d',
    brown700: '#875e35',
    brown800: '#654321',
    brown900: '#432a12',
    brown1000: '#2d1b08',

    // Blue 계열
    blue00: '#f8faff',
    blue100: '#eff6ff',
    blue200: '#e2edfc',
    blue300: '#cbdffa',
    blue400: '#aacefd',
    blue500: '#85b8fd',
    blue600: '#5e98fe',
    blue700: '#217cf9',
    blue800: '#135fcd',
    blue900: '#0b4596',
    blue1000: '#032451',

    // Red 계열
    red00: '#fffafa',
    red100: '#fdf0f0',
    red200: '#fde7e7',
    red300: '#fed4d2',
    red400: '#feb7b3',
    red500: '#fe928d',
    red600: '#fc6a66',
    red700: '#fa342c',
    red800: '#ca1d13',
    red900: '#921708',
    red1000: '#4a1209',

    // 시맨틱 컬러
    kakaoYellow: '#fee500',
    kakaoYellowHover: '#ffea2e',
    kakaoYellowActive: '#d5c000',
    kakaoYellowPressed: '#d5c000',
    kakaoBrown: '#654321',
    kakaoBrownPressed: '#432a12',

    // 배경 컬러
    default: '#ffffff',
    disabled: '#f3f4f5',
    fill: '#f7f8f9',

    // 텍스트 컬러
    textDefault: '#2a3038',
    textSub: '#b0b3ba',
    textDisabled: '#dcdee3',
    textPlaceholder: '#b0b3ba',

    // 테두리 컬러
    borderDefault: '#dcdee3',
    borderDisabled: '#eeeff1',

    // 상태 컬러
    critical: '#fa342c',
    criticalBackground: '#fdf0f0',
    info: '#217cf9',
    infoBackground: '#eff6ff',
  },

  typography: {
    // 제목 (Title)
    title1Bold: {
      fontSize: '1.25rem',
      fontWeight: 800,
      lineHeight: '1.6875rem',
    },
    title1Regular: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '1.6875rem',
    },
    title2Bold: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
    },
    title2Regular: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.5rem',
    },

    // 부제목 (Subtitle)
    subtitle1Bold: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.375rem',
    },
    subtitle1Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    subtitle2Bold: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.1875rem',
    },
    subtitle2Regular: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
    },

    // 본문 (Body)
    body1Bold: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.375rem',
    },
    body1Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.375rem',
    },
    body2Bold: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.1875rem',
    },
    body2Regular: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
    },

    // 라벨 (Label)
    label1Bold: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.1875rem',
    },
    label1Regular: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
    },
    label2Bold: {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: '1rem',
    },
    label2Regular: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1rem',
    },
  },

  spacing: {
    spacing0: '0px',
    spacing1: '4px',
    spacing2: '8px',
    spacing3: '12px',
    spacing4: '16px',
    spacing5: '20px',
    spacing6: '24px',
    spacing7: '28px',
    spacing8: '32px',
    spacing9: '36px',
    spacing10: '40px',
    spacing11: '44px',
    spacing12: '48px',
    spacing13: '52px',
    spacing14: '56px',
    spacing15: '60px',
    spacing16: '64px',
  },

  breakpoints: {
    desktop: 721,
  },
  logo: {
    width: 220,
    height: 100,
  },
};
