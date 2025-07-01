export const colors = {
  gray: {
    0: '#ffffff', // 흰색
    100: '#f7f8f9',
    200: '#f3f4f5',
    300: '#eeeff1',
    400: '#dcdee3',
    500: '#d1d3d8', // 중간 밝은 회색
    600: '#b0b3ba',
    700: '#868b94',
    800: '#555d6d',
    900: '#2a3038',
    1000: '#1a1c20', // 검은색
  },

  yellow: {
    0: '#fffef9', // 가장 밝은 노란색
    100: '#fffce5',
    200: '#fff8b7',
    300: '#fff38a',
    400: '#ffef5c',
    500: '#ffea2e', // 중간 노란색
    600: '#fee500',
    700: '#d5c000',
    800: '#ac9b00',
    900: '#847700',
    1000: '#5b5200', // 가장 어두운 노란색
  },

  brown: {
    0: '#fff9f4', // 가장 밝은 갈색
    100: '#ffeedc',
    200: '#ffe2c4',
    300: '#f9d0a8',
    400: '#edbc8a',
    500: '#cb9a69', // 중간 갈색
    600: '#a97b4d',
    700: '#875e35',
    800: '#654321',
    900: '#432a12',
    1000: '#2d1b08', // 가장 어두운 갈색
  },

  blue: {
    0: '#f8faff', // 가장 밝은 파란색
    100: '#eff6ff',
    200: '#e2edfc',
    300: '#cbdffa',
    400: '#aacefd',
    500: '#85b8fd', // 중간 파란색
    600: '#5e98fe',
    700: '#217cf9',
    800: '#135fcd',
    900: '#0b4596',
    1000: '#032451', // 가장 어두운 파란색
  },

  red: {
    0: '#fffafa', // 가장 밝은 빨간색
    100: '#fdf0f0',
    200: '#fde7e7',
    300: '#fed4d2',
    400: '#feb7b3',
    500: '#fe928d', // 중간 빨간색
    600: '#fc6a66',
    700: '#fa342c',
    800: '#ca1d13',
    900: '#921708',
    1000: '#4a1209', // 가장 어두운 빨간색
  },
} as const;

export const semanticColors = {
  // 브랜드 컬러
  brand: {
    kakaoYellow: '#fee500', // 카카오 메인 노란색
    kakaoYellowHover: '#ffea2e', // 카카오 노란색 호버 상태
    kakaoYellowActive: '#d5c000', // 카카오 노란색 활성 상태
    kakaoYellowPressed: '#d5c000', // 카카오 노란색 눌림 상태
    kakaoBrown: '#654321', // 카카오 갈색
    kakaoBrownPressed: '#432a12', // 카카오 갈색 눌림 상태
  },

  background: {
    default: '#ffffff', // 기본 배경색
    disabled: '#f3f4f5', // 비활성 배경색
    fill: '#f7f8f9', // 채움 배경색
  },

  text: {
    default: '#2a3038', // 기본 텍스트 색상
    sub: '#b0b3ba', // 보조 텍스트 색상
    disabled: '#dcdee3', // 비활성 텍스트 색상
    placeholder: '#b0b3ba', // 플레이스홀더 텍스트 색상
  },

  border: {
    default: '#dcdee3', // 기본 테두리 색상
    disabled: '#eeeff1', // 비활성 테두리 색상
  },

  status: {
    critical: '#fa342c', // 경고/에러 색상
    criticalBackground: '#fdf0f0', // 경고/에러 배경 색상
    info: '#217cf9', // 정보 색상
    infoBackground: '#eff6ff', // 정보 배경 색상
  },
} as const;
