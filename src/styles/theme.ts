export const theme = {
  colors: {
    // 회색 계열 (Gray Scale)
    gray: {
      gray00: "#ffffff", // 흰색
      gray100: "#f7f8f9", // 가장 밝은 회색
      gray200: "#f3f4f5",
      gray300: "#eeeff1",
      gray400: "#dcdee3",
      gray500: "#d1d3d8",
      gray600: "#b0b3ba",
      gray700: "#868b94",
      gray800: "#555d6d",
      gray900: "#2a3038",
      gray1000: "#1a1c20", // 검은색
    },

    // 노란색 계열 (카카오 브랜드 컬러)
    yellow: {
      yellow00: "#fffef9", // 가장 밝은 노란색
      yellow100: "#fffce5",
      yellow200: "#fff8b7",
      yellow300: "#fff38a",
      yellow400: "#ffef5c",
      yellow500: "#ffea2e",
      yellow600: "#fee500", // 카카오 메인 노란색
      yellow700: "#d5c000",
      yellow800: "#ac9b00",
      yellow900: "#847700",
      yellow1000: "#5b5200", // 가장 어두운 노란색
    },

    // 갈색 계열
    brown: {
      brown00: "#fff9f4",
      brown100: "#ffeedc",
      brown200: "#ffe2c4",
      brown300: "#f9d0a8",
      brown400: "#edbc8a",
      brown500: "#cb9a69",
      brown600: "#a97b4d",
      brown700: "#875e35",
      brown800: "#654321", // 카카오 브라운
      brown900: "#432a12",
      brown1000: "#2d1b08", // 가장 어두운 갈색
    },

    // 파란색 계열
    blue: {
      blue00: "#f8faff",
      blue100: "#eff6ff",
      blue200: "#e2edfc",
      blue300: "#cbdffa",
      blue400: "#aacefd",
      blue500: "#85b8fd",
      blue600: "#5e98fe",
      blue700: "#217cf9", // 메인 파란색
      blue800: "#135fcd",
      blue900: "#0b4596",
      blue1000: "#032451", // 가장 어두운 파란색
    },

    // 빨간색 계열
    red: {
      red00: "#fffafa",
      red100: "#fdf0f0",
      red200: "#fde7e7",
      red300: "#fed4d2",
      red400: "#feb7b3",
      red500: "#fe928d",
      red600: "#fc6a66",
      red700: "#fa342c", // 경고/에러 메인
      red800: "#ca1d13",
      red900: "#921708",
      red1000: "#4a1209", // 가장 어두운 빨간색
    },

    // 시맨틱 색상 (의미 기반 컬러 토큰)
    semantic: {
      // 브랜드 색상
      kakaoYellow: "#fee500", // 메인 색상
      kakaoYellowHover: "#ffea2e", // 호버 상태
      kakaoYellowActive: "#d5c000", // 활성 상태
      kakaoYellowPressed: "#d5c000", // 눌림 상태
      kakaoBrown: "#654321",
      kakaoBrownPressed: "#432a12",

      // 배경 색상
      background: {
        default: "#ffffff", // 기본 배경
        disabled: "#f3f4f5", // 비활성 상태 배경
        fill: "#f7f8f9", // 채움용 배경
      },

      // 텍스트 색상
      text: {
        default: "#2a3038", // 기본 텍스트
        sub: "#b0b3ba", // 보조 텍스트
        disabled: "#dcdee3", // 비활성 텍스트
        placeholder: "#b0b3ba", // 플레이스홀더
      },

      // 테두리 색상
      border: {
        default: "#dcdee3",
        disabled: "#eeeff1",
      },

      // 상태 색상
      state: {
        critical: "#fa342c", // 에러/경고 상태
        criticalBackground: "#fdf0f0",
        info: "#217cf9", // 정보 상태
        infoBackground: "#eff6ff",
      },
    },
  },

  // 타이포그래피 (폰트 스타일)
  typography: {
    // 제목
    title1Bold: {
      fontSize: "1.25rem", // 20px
      fontWeight: 700,
      lineHeight: "1.6875rem", // 27px
    },
    title1Regular: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: "1.6875rem",
    },
    title2Bold: {
      fontSize: "1rem", // 16px
      fontWeight: 700,
      lineHeight: "1.5rem", // 24px
    },
    title2Regular: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },

    // 부제목
    subtitle1Bold: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: "1.375rem", // 22px
    },
    subtitle1Regular: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem", // 24px
    },
    subtitle2Bold: {
      fontSize: "0.875rem", // 14px
      fontWeight: 700,
      lineHeight: "1.1875rem", // 19px
    },
    subtitle2Regular: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.1875rem",
    },

    // 본문
    body1Bold: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: "1.375rem", // 22px
    },
    body1Regular: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.375rem",
    },
    body2Bold: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: "1.1875rem", // 19px
    },
    body2Regular: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.1875rem",
    },

    // 라벨
    label1Bold: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: "1.1875rem",
    },
    label1Regular: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.1875rem",
    },
    label2Bold: {
      fontSize: "0.75rem", // 12px
      fontWeight: 700,
      lineHeight: "1rem", // 16px
    },
    label2Regular: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
  },

  // 여백/간격 (Spacing)
  spacing: {
    spacing0: "0px", // 간격 없음
    spacing1: "4px", // 최소 간격
    spacing2: "8px",
    spacing3: "12px",
    spacing4: "16px", // 기본 간격
    spacing5: "20px",
    spacing6: "24px",
    spacing7: "28px",
    spacing8: "32px",
    spacing9: "36px",
    spacing10: "40px",
    spacing11: "44px",
    spacing12: "48px",
    spacing13: "52px",
    spacing14: "56px",
    spacing15: "60px",
    spacing16: "64px", // 최대 간격
  },
};

export type EmotionTheme = typeof theme;
