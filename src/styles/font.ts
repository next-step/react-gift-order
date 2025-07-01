import { css } from '@emotion/react'
import 'pretendard/dist/web/static/pretendard.css'

// font 적용
export const fontStyles = css`
  /* 
  Pretendard 폰트 적용
  https://github.com/orioncactus/pretendard
  https://www.npmjs.com/package/pretendard
  ! npm 패키지로 설치하여 외부 CDN 의존성 제거
  */

  /* reset.ts 에서 inherit 처리 되어 있어 명시를 위해 다음과 같이 구성 */
  html,
  body {
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  }
  *,
  *::before,
  *::after {
    font-family: inherit;
  }
`
