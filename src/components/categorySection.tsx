/** @jsxImportSource @emotion/react */
import { categories } from '@/data/categories';
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';

const containerStyle = (theme: ThemeType) => css`
  margin: 16px 0;
  padding: 16px;
  background-color: ${theme.colors.colorScale.gray[0]};
`;

const titleStyle = css`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  margin-top: 12px;
  gap: 13px;
`;

const itemStyle = css`
  text-align: center;
`;

const imageStyle = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const nameStyle = css`
  font-size: 12px;
  margin-top: 8px;
`;

const CategorySection = () => {
  const theme = useTheme();

  return (
    <section css={containerStyle(theme)}>
      <h2 css={titleStyle}>선물 테마</h2>
      <div css={gridStyle}>
        {categories.map((item) => (
          <div key={item.themeId} css={itemStyle}>
            <img src={item.image} alt={item.name} css={imageStyle} />
            <p css={nameStyle}>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
