export const palette = {
  // Gray scale
  gray00: '#ffffff',
  gray100: '#f7f8f9',
  gray200: '#f3f4f5',
  gray300: '#eeeff1',
  gray400: '#dcdce3',
  gray500: '#d1d3d8',
  gray600: '#b0b3ba',
  gray700: '#868b94',
  gray800: '#555d6d',
  gray900: '#2a3038',
  gray1000: '#1a1c20',

  // Yellow scale (Kakao brand)
  yellow00: '#fffef9',
  yellow100: '#fffce5',
  yellow200: '#fff8b7',
  yellow300: '#fff38a',
  yellow400: '#ffef5c',
  yellow500: '#ffea2e',
  yellow600: '#fee500', // Kakao main yellow
  yellow700: '#d5c000',
  yellow800: '#ac9b00',
  yellow900: '#847700',
  yellow1000: '#5b5200',

  // Brown scale
  brown00: '#fff9f4',
  brown100: '#ffedec',
  brown200: '#ffe2c4',
  brown300: '#f9d0a8',
  brown400: '#edbc8a',
  brown500: '#cb9a69',
  brown600: '#a97b4d',
  brown700: '#875e35',
  brown800: '#654321',
  brown900: '#432a12',
  brown1000: '#2d1b08',

  // Blue scale
  blue00: '#f8faff',
  blue100: '#eff6ff',
  blue200: '#e2edfc',
  blue300: '#cbdbfa',
  blue400: '#aacefd',
  blue500: '#85b8fd',
  blue600: '#5e98fe',
  blue700: '#217cf9',
  blue800: '#135fcd',
  blue900: '#0b4596',
  blue1000: '#032451',

  // Red scale
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

  // Semantic brand tokens
  kakaoYellow: '#fee500',
  kakaoYellowHover: '#ffea2e',
  kakaoYellowActive: '#d5c000',
  kakaoYellowPressed: '#d5c000',
  kakaoBrown: '#654321',
  kakaoBrownPressed: '#432a12',

  // Alias tokens
  white: '#ffffff',
  black: '#000000',
  primary: '#fee500', // convenient alias
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

export const typography = {
  // Title (20px, 27px)
  title1Bold:      { fontSize: '1.25rem', fontWeight: 700, lineHeight: '1.6875rem' },
  title1Regular:   { fontSize: '1.25rem', fontWeight: 400, lineHeight: '1.6875rem' },
  // Title (16px, 24px)
  title2Bold:      { fontSize: '1rem',    fontWeight: 700, lineHeight: '1.5rem'    },
  title2Regular:   { fontSize: '1rem',    fontWeight: 400, lineHeight: '1.5rem'    },
  // Subtitle (16px, 22‒24px)
  subtitle1Bold:   { fontSize: '1rem',    fontWeight: 700, lineHeight: '1.375rem' },
  subtitle1Regular:{ fontSize: '1rem',    fontWeight: 400, lineHeight: '1.5rem'   },
  subtitle2Bold:   { fontSize: '0.875rem',fontWeight: 700, lineHeight: '1.1875rem'},
  subtitle2Regular:{ fontSize: '0.875rem',fontWeight: 400, lineHeight: '1.1875rem'},
  // Body (16 / 14)
  body1Bold:       { fontSize: '1rem',    fontWeight: 700, lineHeight: '1.375rem' },
  body1Regular:    { fontSize: '1rem',    fontWeight: 400, lineHeight: '1.375rem' },
  body2Bold:       { fontSize: '0.875rem',fontWeight: 700, lineHeight: '1.1875rem'},
  body2Regular:    { fontSize: '0.875rem',fontWeight: 400, lineHeight: '1.1875rem'},
  // Label (14 / 12)
  label1Bold:      { fontSize: '0.875rem',fontWeight: 700, lineHeight: '1.1875rem'},
  label1Regular:   { fontSize: '0.875rem',fontWeight: 400, lineHeight: '1.1875rem'},
  label2Bold:      { fontSize: '0.75rem', fontWeight: 700, lineHeight: '1rem'     },
  label2Regular:   { fontSize: '0.75rem', fontWeight: 400, lineHeight: '1rem'     },
};
export const theme = { palette, spacing, typography } as const;