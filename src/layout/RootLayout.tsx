/** @jsxImportSource @emotion/react */
import type { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      css={css`
        max-width: 720px; /* 화면의 max-width를 720px으로 제한 */
        width: 100%; /* 모바일(좁은 화면)에서는 100 % */
        margin: 0 auto; /* 넓은 화면에서는 가운데 정렬 */
        min-height: 100%; /* footer 등을 고려한 전체 높이 확보 */
        /* TODO : 화면 기본 좌우여백 추가 */
      `}
    >
      {children}
    </div>
  );
};

export default RootLayout;
