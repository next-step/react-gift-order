/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';
import { FaPlus } from 'react-icons/fa';

const wrapper = css`
  padding: 16px;
  background-color: #f5f6f8;
`;

const container =css `
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const iconWrapper = (theme: ThemeType) => css`
  width: 48px;
  height: 48px;
  background-color: ${theme.color.yellow.yellow600};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const text = (theme: ThemeType) => css`
  color: ${theme.color.semantic.text.default};
  font-size: 16px;
  font-weight: 500;

  a {
    text-decoration: underline;
    color: ${theme.color.blue.blue700};
  }
`;

const SelectFriend = () => {
  const theme = useTheme() as ThemeType;

  return (
    <div css={wrapper}>
      <div css={container}>
        <div css={iconWrapper(theme)}>
          <FaPlus color="black" size={16} />
        </div>
        <div css={text(theme)}>
          선물할 친구를 선택해 주세요.
        </div>
      </div>
    </div>
  );
};

export default SelectFriend;
