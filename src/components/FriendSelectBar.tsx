
import { css } from '@emotion/react';
import { palette } from '@/styles/theme';
import { useAuth } from '@/contexts/AuthContext';

export const FriendSelectBar = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <button
      css={css`
      width: 100%;
      height: 50px;
      margin-top: 12px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      gap: 12px;
      background: ${palette.gray100};
      font-size: 14px;
    `}
    >
      <span
        css={css`
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: ${palette.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      `}
      >
        +
      </span>
      {isLoggedIn && user ? (
        <span>
          <strong css={{ fontWeight: 'bold' }}>{user.id}</strong>님! 선물할 친구를 선택해주세요.
        </span>
      ) : (
        '선물할 친구를 선택해주세요.'
      )}
    </button>

  );
};
