// 타입 정의 파일

import '@emotion/react';
import { ThemeType } from './theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
