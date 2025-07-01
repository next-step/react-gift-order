import { css, useTheme } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { mockProduct } from "@/mocks/productData";
import { useSearchParams } from "react-router-dom";

const gridStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.spacing4};
  padding: ${theme.spacing.spacing6} ${theme.spacing.spacing4};
`;

const itemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const rankStyle = (theme: Theme) => css`
  font-weight: bold;
  font-size: ${theme.fontSizes.label1Bold};
  background-color: ${theme.colors.gray.gray200};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

const imageStyle = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 6px;
  border-radius: 50%;
`;

const nameStyle = (theme: Theme) => css`
  font-size: ${theme.fontSizes.label1Regular};
`;

export default function RankingGrid() {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const genderFilter = searchParams.get("gender");
  const filteredProducts =
    genderFilter && genderFilter !== "전체"
      ? (
          mockProduct as Array<(typeof mockProduct)[0] & { gender?: string }>
        ).filter((item) => item.gender === genderFilter)
      : mockProduct;

  return (
    <div css={gridStyle(theme)}>
      {filteredProducts.map((item, index) => (
        <div key={item.id} css={itemStyle}>
          <div css={rankStyle(theme)}>{index + 1}</div>
          <img src={item.imageURL} alt={item.name} css={imageStyle} />
          <div css={nameStyle(theme)}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
