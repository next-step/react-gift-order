/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';

const wrapper = (theme: ThemeType) => css`
  background-color: ${theme.color.gray.gray300};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
`;

const buttonStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  background-color: white;
  padding: ${theme.spacing[4]} ${theme.spacing[4]};
  width: 100%;
  border-radius: ${theme.spacing[3]};
  cursor: pointer;
`;

const iconWrapper = (theme: ThemeType) => css`
  width: ${theme.spacing[8]}; 
  height: ${theme.spacing[8]};
  border-radius: 50%;
  background-color: ${theme.color.semantic.kakaoYellow}; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing[3]};
  flex-shrink: 0;
`;

const textStyle = (theme: ThemeType) => css`
  color: ${theme.color.semantic.textDefault};
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
`;

const FriendSelector = () => {
  const theme = useTheme();

  return (
    <div css={wrapper(theme)}>
      <button css={buttonStyle(theme)}>
        <div css={iconWrapper(theme)}>
          <FaPlus size={12} color="black" />
        </div>
        <span css={textStyle(theme)}>선물할 친구를 선택해 주세요.</span>
      </button>
    </div>
  );
};

export default FriendSelector;
