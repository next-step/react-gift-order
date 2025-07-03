import { css } from '@emotion/react';
import { palette } from '@/styles/theme';

export const Banner = () => (
  <div
    css={css`
      background: ${palette.primary};
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 13px;
      margin: 16px 0;
      font-weight: 700;
    `}
  >
    카카오테크 캠퍼스 3기 여러분<br />프론트엔드 2단계 과제 화이팅! 
  </div>
);
