/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { categories } from '@/data/categories';
import { palette } from '@/styles/theme';

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
  padding: 20px 0;
`;

const itemStyle = css`
  text-align: center;
  font-size: 12px;
  color: ${palette.gray900};

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 5px;
  }
`;

export const CategoryGrid = () => (
  <div css={gridStyle}>
    {categories.map((cat) => (
      <button key={cat.themeId} css={itemStyle} aria-label={cat.name}>
        <img src={cat.image} alt={cat.name} />
        {cat.name}
      </button>
    ))}
  </div>
);
