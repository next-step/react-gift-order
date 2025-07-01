/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';
import theme from '../styles/theme';

const bannerStyle = (theme: ThemeType) => css`
  background-color: ${theme.color.semantic.kakaoYellow};
  color: ${theme.color.semantic.kakaoBrown};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.spacing[2]};
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Regular.fontWeight};
  line-height: ${theme.typography.body2Regular.lineHeight};
`;

const highlight = css`
  display: block;
  font-weight: bold;
  margin-top: ${theme.spacing[1]};
`;

const Banner = () => {
  const theme = useTheme();

  return (
    <div css={bannerStyle(theme)}>
      FE 11팀 화이팅~ 🎉
      <span css={highlight}>프론트엔드 2단계 과제 화이팅! 💪</span>
    </div>
  );
};

export default Banner;
