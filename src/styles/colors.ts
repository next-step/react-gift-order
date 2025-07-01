// 색상 스케일 타입 정의
export interface ColorScale {
  '00': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '1000': string;
}

// 기본 색상 팔레트
export const colors = {
  // Gray 계열
  gray: {
    '00': '#ffffff',
    '100': '#f7f8f9',
    '200': '#f3f4f5',
    '300': '#eeeff1',
    '400': '#dcdee3',
    '500': '#d1d3d8',
    '600': '#b0b3ba',
    '700': '#868b94',
    '800': '#555d6d',
    '900': '#2a3038',
    '1000': '#1a1c20',
  } as ColorScale,

  // Yellow 계열 (카카오 브랜드 컬러)
  yellow: {
    '00': '#fffef9',
    '100': '#fffce5',
    '200': '#fff8b7',
    '300': '#fff38a',
    '400': '#ffef5c',
    '500': '#ffea2e',
    '600': '#fee500',
    '700': '#d5c000',
    '800': '#ac9b00',
    '900': '#847700',
    '1000': '#5b5200',
  } as ColorScale,

  // Brown 계열
  brown: {
    '00': '#fff9f4',
    '100': '#ffeedc',
    '200': '#ffe2c4',
    '300': '#f9d0a8',
    '400': '#edbc8a',
    '500': '#cb9a69',
    '600': '#a97b4d',
    '700': '#875e35',
    '800': '#654321',
    '900': '#432a12',
    '1000': '#2d1b08',
  } as ColorScale,

  // Blue 계열
  blue: {
    '00': '#f8faff',
    '100': '#eff6ff',
    '200': '#e2edfc',
    '300': '#cbdffa',
    '400': '#aacefd',
    '500': '#85b8fd',
    '600': '#5e98fe',
    '700': '#217cf9',
    '800': '#135fcd',
    '900': '#0b4596',
    '1000': '#032451',
  } as ColorScale,

  // Red 계열
  red: {
    '00': '#fffafa',
    '100': '#fdf0f0',
    '200': '#fde7e7',
    '300': '#fed4d2',
    '400': '#feb7b3',
    '500': '#fe928d',
    '600': '#fc6a66',
    '700': '#fa342c',
    '800': '#ca1d13',
    '900': '#921708',
    '1000': '#4a1209',
  } as ColorScale,
} as const;

// 시맨틱 컬러
export const semanticColors = {
  // 브랜드 컬러
  brand: {
    kakaoYellow: '#fee500',
    kakaoYellowHover: '#ffea2e',
    kakaoYellowActive: '#d5c000',
    kakaoYellowPressed: '#d5c000',
    kakaoBrown: '#654321',
    kakaoBrownPressed: '#432a12',
  },

  // 배경 컬러
  background: {
    default: '#ffffff',
    disabled: '#f3f4f5',
    fill: '#f7f8f9',
  },

  // 텍스트 컬러
  text: {
    default: '#2a3038',
    sub: '#b0b3ba',
    disabled: '#dcdee3',
    placeholder: '#b0b3ba',
  },

  // 테두리 컬러
  border: {
    default: '#dcdee3',
    disabled: '#eeeff1',
  },

  // 상태 컬러
  status: {
    critical: '#fa342c',
    criticalBackground: '#fdf0f0',
    info: '#217cf9',
    infoBackground: '#eff6ff',
  },
} as const;

 