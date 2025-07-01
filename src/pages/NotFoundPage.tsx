import { Link } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';

export const NotFoundPage = () => {
  const { palette, spacing, typography } = useTheme();
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: ${spacing.spacing4};
        background: ${palette.gray100};
      `}
    >
      <h1
        css={css`
          font-size: ${typography.title1Bold.fontSize};
          font-weight: ${typography.title1Bold.fontWeight};
          color: ${palette.blue700};
        `}
      >
        404 | 페이지를 찾을 수 없어요
      </h1>
      <Link
        to="/"
        css={css`
          padding: ${spacing.spacing3} ${spacing.spacing6};
          border-radius: 9999px;
          background: ${palette.blue700};
          color: ${palette.gray00};
          font-weight: ${typography.label1Bold.fontWeight};
          text-decoration: none;
        `}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};
