import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { IoAdd } from "react-icons/io5";
import { useTheme } from "@emotion/react";

const SelectFriend = () => {
  const theme = useTheme();

  return (
    <div css={containerStyle(theme)}>
      <div css={contentsStyle(theme)}>
        <IoAdd css={buttonStyle(theme)} />
        <span css={textStyle(theme)}>선물할 친구를 선택하세요</span>
      </div>
    </div>
  );
};

const containerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 80px;
  background-color: ${theme.colors.gray.gray100};
  cursor: pointer;
`;
const buttonStyle = (theme: Theme) => css`
  color: ${theme.colors.semantic.kakaoBrown};
  background-color: ${theme.colors.semantic.kakaoYellow};
  font-size: 32px;
  margin-right: 8px;
  border-radius: 10px;
  margin-left: 0px;
  width: 36px;
  height: 36px;
`;

const contentsStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: 95%;
  height: 50px;
  background-color: ${theme.colors.semantic.background.default};
  color: ${theme.colors.semantic.text.default};
  padding-left: 16px;
  padding-right: 16px;
  border: 1px none;
  border-radius: 16px;
`;

const textStyle = (theme: Theme) => css`
  font-size: ${theme.typography.subtitle1Bold.size};
  font-weight: ${theme.typography.subtitle1Bold.weight};
  line-height: ${theme.typography.subtitle1Bold.lineHeight};
  color: ${theme.colors.semantic.text.default};
  border-radius: 16px;
`;

export default SelectFriend;
