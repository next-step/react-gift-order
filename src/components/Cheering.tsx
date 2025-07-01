import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Cheering = () => {
  const theme = useTheme();
  return (
    <div css={containerStyle(theme)}>
      <span css={textStyle(theme)}>화이팅🎉</span>
    </div>
  );
};

export default Cheering;

const containerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 80px;
  background-color: ${theme.colors.semantic.kakaoYellow};
  border-radius: 16px;
`;

const textStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body1Bold.size};
  font-weight: ${theme.typography.body1Bold.weight};
  line-height: ${theme.typography.body1Bold.lineHeight};
  color: ${theme.colors.semantic.text.default};
  padding-left: 16px;
  border-radius: 16px;
`;
