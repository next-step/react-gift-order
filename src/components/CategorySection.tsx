import { css, useTheme } from "@emotion/react";
import { categoryData } from "@/mocks/categoryData";
import type { Theme } from "@emotion/react";

const sectionStyle = (theme: Theme) => css`
  padding: ${theme.spacing.spacing6} ${theme.spacing.spacing4};
`;

const titleStyle = (theme: Theme) => css`
  font-size: ${theme.fontSizes.title2Bold};
  font-weight: 700;
  margin-bottom: ${theme.spacing.spacing4};
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  column-gap: 8px;
  justify-items: center;
`;

const itemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const imageStyle = css`
  width: 56px;
  height: 56px;
  object-fit: cover;
  margin-bottom: 8px;
`;

const nameStyle = (theme: Theme) => css`
  font-size: ${theme.fontSizes.label2Regular};
  color: ${theme.colors.semantic.textDefault};
`;

export default function CategorySection() {
  const theme = useTheme();

  return (
    <section css={sectionStyle(theme)}>
      <h2 css={titleStyle(theme)}>선물 테마</h2>
      <div css={gridStyle}>
        {categoryData.map((item) => (
          <div key={item.themeId} css={itemStyle}>
            <img src={item.image} alt={item.name} css={imageStyle} />
            <span css={nameStyle(theme)}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
