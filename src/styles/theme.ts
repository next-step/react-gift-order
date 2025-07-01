export const colors = {
  gray: {
    0: '#ffffff',
    100: '#f7f8f9',
    200: '#f3f4f5',
    300: '#eeeff1',
    400: '#dcdee3',
    500: '#d1d3d8',
    600: '#b0b3ba',
    700: '#868b94',
    800: '#555d6d',
    900: '#2a3038',
    1000: '#1a1c20',
  },
  yellow: {
    0: '#fffef9',
    100: '#fffce5',
    200: '#fff8b7',
    300: '#fff38a',
    400: '#ffef5c',
    500: '#ffea2e',
    600: '#fee500',
    700: '#d5c000',
    800: '#ac9b00',
    900: '#847700',
    1000: '#5b5200',
  },
  brown: {
    0: '#fff9f4',
    100: '#ffeedc',
    200: '#ffe2c4',
    300: '#f9d0a8',
    400: '#edbc8a',
    500: '#cb9a69',
    600: '#a97b4d',
    700: '#875e35',
    800: '#654321',
    900: '#432a12',
    1000: '#2d1b08',
  },
  blue: {
    0: '#f8faff',
    100: '#eff6ff',
    200: '#e2edfc',
    300: '#cbdffa',
    400: '#aacefd',
    500: '#85b8fd',
    600: '#5e98fe',
    700: '#217cf9',
    800: '#135fcd',
    900: '#0b4596',
    1000: '#032451',
  },
  red: {
    0: '#fffafa',
    100: '#fdf0f0',
    200: '#fde7e7',
    300: '#fed4d2',
    400: '#feb7b3',
    500: '#fe928d',
    600: '#fc6a66',
    700: '#fa342c',
    800: '#ca1d13',
    900: '#921708',
    1000: '#4a1209',
  },


  kakaoYellow: '#fee500',
  kakaoYellowHover: '#ffea2e',
  kakaoYellowActive: '#d5c000',
  kakaoYellowPressed: '#d5c000',
  kakaoBrown: '#654321',
  kakaoBrownPressed: '#432a12',

  background: {
    default: '#ffffff',
    disabled: '#f3f4f5',
    fill: '#f7f8f9',
  },
  text: {
    default: '#2a3038',
    sub: '#b0b3ba',
    disabled: '#dcdee3',
    placeholder: '#b0b3ba',
  },
  border: {
    default: '#dcdee3',
    disabled: '#eeeff1',
  },
  state: {
    critical: '#fa342c',
    criticalBackground: '#fdf0f0',
    info: '#217cf9',
    infoBackground: '#eff6ff',
  },
}

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
  body2Regular: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.1875rem',
  },
  label2Bold: {
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
}

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
}

export const theme = {
  colors,
  typography,
  spacing,
}

export type ThemeType = typeof theme
