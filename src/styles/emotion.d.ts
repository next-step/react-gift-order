import '@emotion/react'
import {ThemeType} from './theme';

declare module '@emotion/react' {
  // eslint 예외 처리 적용
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
