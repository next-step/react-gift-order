/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';

const containerStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 20px 15px;
  border-radius: 16px;
  gap: 12px;
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
`;

const subTitleStyle = (theme: ThemeType) => css`
  ${theme.typography.label2Regular};
  color: ${theme.colors.semanticColor.textColor.sub};
  line-height: 1.4;
`;

const titleStyle = (theme: ThemeType) => css`
  ${theme.typography.label1Bold};
  color: ${theme.colors.semanticColor.textColor.default};
  line-height: 1.4;
`;

function MessageSection() {
  const theme = useTheme();

  return (
    <div css={containerStyle(theme)}>
      <div css={subTitleStyle(theme)}>카카오테크 캠퍼스 3기 여러분</div>
      <div css={titleStyle(theme)}>프론트엔드 2단계 과제 화이팅! 🎉</div>
    </div>
  );
}

export default MessageSection;
