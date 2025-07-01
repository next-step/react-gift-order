/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';

const wrapper = (theme: ThemeType) => css`
  padding: 16px;
  background-color: ${theme.color.semantic.background.default};
`;

const container = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 30px;
  background-color: ${theme.color.yellow.yellow600};
`;

const text = css`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0;
  text-align: left;
`;

const Banner = () => {
  const theme = useTheme() as ThemeType;

  return (
    <div css={wrapper(theme)}>
      <div css={container(theme)}>
        <div css={text}>
          프론트엔드 2단계 과제 화이팅!
        </div>
      </div>
    </div>
  );
};

export default Banner;
