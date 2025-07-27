/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';
import { useUserContext } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const containerStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  margin-top: 18px;
  background-color: ${theme.colors.colorScale.gray[0]};
`;

const plusButtonStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
  ${theme.typography.title1Bold};
  cursor: pointer;
  border: none;
`;

const textStyle = (theme: ThemeType) => css`
  ${theme.typography.title2Bold};
`;

function GiftRecipientList() {
  const theme = useTheme();
  const { isLoggedIn, user } = useUserContext();
  const navigate = useNavigate();

  const handleClick = () => {
    const productId = 1;
    navigate(`/order?productId=${productId}`);
  };

  return (
    <div css={containerStyle(theme)}>
      <button
        css={plusButtonStyle(theme)}
        aria-label="받는 사람 추가"
        onClick={handleClick}
      >
        ＋
      </button>
      <span css={textStyle(theme)}>
        {isLoggedIn
          ? `${user?.nickname}님! 선물할 친구를 선택해 주세요.`
          : '선물할 친구를 선택해 주세요.'}
      </span>
    </div>
  );
}

export default GiftRecipientList;
