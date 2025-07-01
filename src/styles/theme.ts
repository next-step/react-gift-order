import '@emotion/react'

// * 디자인 토큰 테마 생성
// ? 토큰 가이드 참고 : https://edu.nextstep.camp/s/0eoNzeZS/ls/lNeUqOll
export const theme = {
  colors: {
    // Gray 계열
    gray: {
      gray00: '#ffffff', // 흰색
      gray100: '#f7f8f9', // 가장 밝은 회색
      gray200: '#f3f4f5', // 매우 밝은 회색
      gray300: '#eeeff1', // 밝은 회색
      gray400: '#dcdee3', // 연한 회색
      gray500: '#d1d3d8', // 중간 밝은 회색
      gray600: '#b0b3ba', // 중간 회색
      gray700: '#868b94', // 진한 회색
      gray800: '#555d6d', // 매우 진한 회색
      gray900: '#2a3038', // 거의 검은색
      gray1000: '#1a1c20', // 검은색
    },
    // Yellow 계열 (카카오 브랜드 컬러)
    yellow: {
      yellow00: '#fffef9', // 가장 밝은 노란색
      yellow100: '#fffce5', // 매우 밝은 노란색
      yellow200: '#fff8b7', // 밝은 노란색
      yellow300: '#fff38a', // 연한 노란색
      yellow400: '#ffef5c', // 중간 밝은 노란색
      yellow500: '#ffea2e', // 중간 노란색
      yellow600: '#fee500', // 카카오 메인 노란색
      yellow700: '#d5c000', // 진한 노란색
      yellow800: '#ac9b00', // 매우 진한 노란색
      yellow900: '#847700', // 어두운 노란색
      yellow1000: '#5b5200', // 가장 어두운 노란색
    },
    // Brown 계열
    brown: {
      brown00: '#fff9f4', // 가장 밝은 갈색
      brown100: '#ffeedc', // 매우 밝은 갈색
      brown200: '#ffe2c4', // 밝은 갈색
      brown300: '#f9d0a8', // 연한 갈색
      brown400: '#edbc8a', // 중간 밝은 갈색
      brown500: '#cb9a69', // 중간 갈색
      brown600: '#a97b4d', // 진한 갈색
      brown700: '#875e35', // 매우 진한 갈색
      brown800: '#654321', // 카카오 브라운
      brown900: '#432a12', // 어두운 갈색
      brown1000: '#2d1b08', // 가장 어두운 갈색
    },
    // Blue 계열
    blue: {
      blue00: '#f8faff', // 가장 밝은 파란색
      blue100: '#eff6ff', // 매우 밝은 파란색
      blue200: '#e2edfc', // 밝은 파란색
      blue300: '#cbdffa', // 연한 파란색
      blue400: '#aacefd', // 중간 밝은 파란색
      blue500: '#85b8fd', // 중간 파란색
      blue600: '#5e98fe', // 진한 파란색
      blue700: '#217cf9', // 매우 진한 파란색
      blue800: '#135fcd', // 어두운 파란색
      blue900: '#0b4596', // 매우 어두운 파란색
      blue1000: '#032451', // 가장 어두운 파란색
    },
    // Red 계열
    red: {
      red00: '#fffafa', // 가장 밝은 빨간색
      red100: '#fdf0f0', // 매우 밝은 빨간색
      red200: '#fde7e7', // 밝은 빨간색
      red300: '#fed4d2', // 연한 빨간색
      red400: '#feb7b3', // 중간 밝은 빨간색
      red500: '#fe928d', // 중간 빨간색
      red600: '#fc6a66', // 진한 빨간색
      red700: '#fa342c', // 매우 진한 빨간색
      red800: '#ca1d13', // 어두운 빨간색
      red900: '#921708', // 매우 어두운 빨간색
      red1000: '#4a1209', // 가장 어두운 빨간색
    },
  },
  semanticColors: {
    // 브랜드 컬러
    brand: {
      kakaoYellow: '#fee500', // 카카오 메인 노란색
      kakaoYellowHover: '#ffea2e', // 카카오 노란색 호버 상태
      kakaoYellowActive: '#d5c000', // 카카오 노란색 활성 상태
      kakaoYellowPressed: '#d5c000', // 카카오 노란색 눌림 상태
      kakaoBrown: '#654321', // 카카오 갈색
      kakaoBrownPressed: '#432a12', // 카카오 갈색 눌림 상태
    },
    // 배경 컬러
    background: {
      default: '#ffffff', // 기본 배경색
      disabled: '#f3f4f5', // 비활성 배경색
      fill: '#f7f8f9', // 채움 배경색
    },
    // 텍스트 컬러
    text: {
      default: '#2a3038', // 기본 텍스트 색상
      sub: '#b0b3ba', // 보조 텍스트 색상
      disabled: '#dcdee3', // 비활성 텍스트 색상
      placeholder: '#b0b3ba', // 플레이스홀더 텍스트 색상
    },
    // 테두리 컬러
    border: {
      default: '#dcdee3', // 기본 테두리 색상
      disabled: '#eeeff1', // 비활성 테두리 색상
    },
    // 상태 컬러
    status: {
      critical: '#fa342c', // 경고/에러 색상
      criticalBackground: '#fdf0f0', // 경고/에러 배경 색상
      info: '#217cf9', // 정보 색상
      infoBackground: '#eff6ff', // 정보 배경 색상
    },
  },
  typography: {
    // 제목 (Title)
    title: {
      title1Bold: {
        fontSize: '1.25rem', // 20px
        fontWeight: 700,
        lineHeight: '1.6875rem', // 27px
      },
      title1Regular: {
        fontSize: '1.25rem', // 20px
        fontWeight: 400,
        lineHeight: '1.6875rem', // 27px
      },
      title2Bold: {
        fontSize: '1rem', // 16px
        fontWeight: 700,
        lineHeight: '1.5rem', // 24px
      },
      title2Regular: {
        fontSize: '1rem', // 16px
        fontWeight: 400,
        lineHeight: '1.5rem', // 24px
      },
    },
    // 부제목 (Subtitle)
    subtitle: {
      subtitle1Bold: {
        fontSize: '1rem', // 16px
        fontWeight: 700,
        lineHeight: '1.375rem', // 22px
      },
      subtitle1Regular: {
        fontSize: '1rem', // 16px
        fontWeight: 400,
        lineHeight: '1.5rem', // 24px
      },
      subtitle2Bold: {
        fontSize: '0.875rem', // 14px
        fontWeight: 700,
        lineHeight: '1.1875rem', // 19px
      },
      subtitle2Regular: {
        fontSize: '0.875rem', // 14px
        fontWeight: 400,
        lineHeight: '1.1875rem', // 19px
      },
    },
    // 본문 (Body)
    body: {
      body1Bold: {
        fontSize: '1rem', // 16px
        fontWeight: 700,
        lineHeight: '1.375rem', // 22px
      },
      body1Regular: {
        fontSize: '1rem', // 16px
        fontWeight: 400,
        lineHeight: '1.375rem', // 22px
      },
      body2Bold: {
        fontSize: '0.875rem', // 14px
        fontWeight: 700,
        lineHeight: '1.1875rem', // 19px
      },
      body2Regular: {
        fontSize: '0.875rem', // 14px
        fontWeight: 400,
        lineHeight: '1.1875rem', // 19px
      },
    },
    // 라벨 (Label)
    label: {
      label1Bold: {
        fontSize: '0.875rem', // 14px
        fontWeight: 700,
        lineHeight: '1.1875rem', // 19px
      },
      label1Regular: {
        fontSize: '0.875rem', // 14px
        fontWeight: 400,
        lineHeight: '1.1875rem', // 19px
      },
      label2Bold: {
        fontSize: '0.75rem', // 12px
        fontWeight: 700,
        lineHeight: '1rem', // 16px
      },
      label2Regular: {
        fontSize: '0.75rem', // 12px
        fontWeight: 400,
        lineHeight: '1rem', // 16px
      },
    },
  },
  spacing: {
    spacing0: '0px', // 간격 없음
    spacing1: '4px', // 최소 간격
    spacing2: '8px', // 작은 간격
    spacing3: '12px', // 작은-중간 간격
    spacing4: '16px', // 기본 간격
    spacing5: '20px', // 중간 간격
    spacing6: '24px', // 중간-큰 간격
    spacing7: '28px', // 큰 간격
    spacing8: '32px', // 매우 큰 간격
    spacing9: '36px', // 초대형 간격
    spacing10: '40px', // 40px 간격
    spacing11: '44px', // 44px 간격
    spacing12: '48px', // 48px 간격
    spacing13: '52px', // 52px 간격
    spacing14: '56px', // 56px 간격
    spacing15: '60px', // 60px 간격
    spacing16: '64px', // 최대 간격
  },
} as const

// * Emotion의 테마 인터페이스 확장
// ? 자동완성 및 안정성을 위해 타입 정의
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof theme.colors // 색상
    semanticColors: typeof theme.semanticColors // 시멘틱 색상
    typography: typeof theme.typography // 타이포그래피
    spacing: typeof theme.spacing // 간격
  }
}
