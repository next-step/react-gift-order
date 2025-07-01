// src/styles/theme.ts
import type { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    gray00: '#ffffff',
    gray100: '#f7f8f9',
    gray200: '#f3f4f5',
    gray300: '#eeeff1',
    gray600: '#b0b3ba',
    gray800: '#555d6d',
    gray1000: '#1a1c20',
    yellow00: '#fffef9',
    yellow600: '#fee500',
    yellow800: '#ac9b00',
    blue00: '#f8faff',
    blue200: '#e2edfc',
    blue500: '#85b8fd',
    kakaoYellow: '#fee500',
    kakaoYellowHover: '#ffea2e',
    kakaoYellowActive: '#d5c000',
    kakaoYellowPressed: '#d5c000',
    default: '#ffffff', //기본배경색
    textDefault: '#2a3038', //기본 텍스트 색상
    textSub: '#b0b3ba', //보조 텍스트 색상
  },
  typography: {
    title1Regular: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '1.6875rem',
    },
    subtitle1Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    body2Regular: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
    },
  },
} as const;
