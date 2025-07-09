import { colors, semanticColors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';

// Emotion Theme 객체 : 토큰 통합
export const theme = {
  colors,
  semanticColors,
  spacing,
  typography,
} as const;

// Emotion의 테마 인터페이스 확장
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof theme.colors; // 색상
    semanticColors: typeof theme.semanticColors; // 시멘틱 색상
    typography: typeof theme.typography; // 타이포그래피
    spacing: typeof theme.spacing; // 간격
  }
}
