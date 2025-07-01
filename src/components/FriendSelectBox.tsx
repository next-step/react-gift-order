import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";
import { FiPlus } from "react-icons/fi";

const boxStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.semantic.kakaoYellow};
  border-radius: 12px;
  padding: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing6};
`;

const plusIconStyle = (theme: Theme) => css`
  background-color: ${theme.colors.gray.gray00};
  color: ${theme.colors.gray.gray1000};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.body1Bold.fontSize};
  margin-right: ${theme.spacing.spacing3};
`;

const textStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
`;

export default function FriendSelectBox() {
  const theme = useTheme();
  return (
    <div css={boxStyle(theme)}>
      <div css={plusIconStyle(theme)}>
        <FiPlus />
      </div>
      <span css={textStyle(theme)}>선물할 친구를 선택해 주세요.</span>
    </div>
  );
}
