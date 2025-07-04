import { categoryData } from "@/data/categoryData.ts";
import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Category = () => {
  const theme = useTheme();

  return (
    <div css={categoryStyle(theme)}>
      {categoryData.map((category) => (
        <div
          css={categoryItemStyle(theme)}
          key={category.themeId}
          className="category-item"
        >
          <img
            src={category.image}
            alt={category.name}
            className="category-image"
            css={imageStyle}
          />
          <h3 className="category-name">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

const categoryStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  font-size: ${theme.typography.label2Bold.size};
  font-weight: ${theme.typography.label2Bold.weight};
  line-height: ${theme.typography.label2Bold.lineHeight};
  text-align: center;
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
  background: ${theme.colors.semantic.background.default};
  border-bottom: 1px solid ${theme.colors.semantic.border.default};
`;

const categoryItemStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.semantic.text.default};
`;

const imageStyle = () => css`
  width: 50%;
  max-width: 50px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  cursor: pointer;
`;

export default Category;
