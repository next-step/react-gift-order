const colorScale = {
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
};

const semanticColors = {
  brand: {
    kakaoYellow: colorScale.yellow600,
    kakaoYellowHover: colorScale.yellow500,
    kakaoYellowActive: colorScale.yellow700,
    kakaoYellowPressed: colorScale.yellow700,
    kakaoBrown: colorScale.brown800,
    kakaoBrownPressed: colorScale.brown900,
  },
  background: {
    default: colorScale.gray00,
    disabled: colorScale.gray200,
    fill: colorScale.gray100,
  },
  text: {
    default: colorScale.gray900,
    sub: colorScale.gray600,
    disabled: colorScale.gray400,
    placeholder: colorScale.gray600,
  },
  stroke: {
    default: colorScale.gray400,
    disabled: colorScale.gray300,
  },
  critical: {
    default: colorScale.red700,
    background: colorScale.red100,
  },
  info: {
    default: colorScale.blue700,
    background: colorScale.blue100,
  },
};

export const colors = {
  scale: colorScale,
  semantic: semanticColors,
};

export const typography = {
  title1Bold: {
    fontSize: '1.25rem',
    fontWeight: 700,
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
    fontWeight: 400,
    lineHeight: '1.5rem',
  },
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
};

export const spacing = {
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
};
