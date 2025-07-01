/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import type { ThemeType } from "@/styles/theme/theme";

interface RankingItemCardProps {
  rank: number;
  imageURL: string;
  brandName: string;
  productName: string;
  price: number;
}

export const RankingCard = ({
  rank,
  imageURL,
  brandName,
  productName,
  price,
}: RankingItemCardProps) => {
  const theme = useTheme();

  return (
    <div css={itemStyle}>
      <span css={rankBadge(theme, rank)}>{rank}</span>
      <img css={itemImg(theme)} src={imageURL} alt={productName} />
      <p css={brandNameStyle(theme)}>{brandName}</p>
      <h6 css={productNameStyle(theme)}>{productName}</h6>
      <p css={priceStyle(theme)}>
        {price.toLocaleString()} <span>원</span>
      </p>
    </div>
  );
};

const itemStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

const rankBadge = (theme: ThemeType, rank: number) => css`
  position: absolute;
  top: ${theme.spacing.spacing1};
  left: ${theme.spacing.spacing1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: ${rank <= 3 ? theme.colors.red600 : theme.colors.gray600};
  color: white;
  ${theme.typography.label2Bold}
`;

const itemImg = (theme: ThemeType) => css`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  margin-bottom: ${theme.spacing.spacing2};
  object-fit: cover;
`;

const brandNameStyle = (theme: ThemeType) => css`
  ${theme.typography.label2Regular}
  color: ${theme.colors.gray700};
  margin-bottom: ${theme.spacing.spacing1};
`;

const productNameStyle = (theme: ThemeType) => css`
  ${theme.typography.body2Bold}
  color: ${theme.colors.textDefault};
  margin-bottom: ${theme.spacing.spacing2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const priceStyle = (theme: ThemeType) => css`
  ${theme.typography.body2Bold}
  color: ${theme.colors.textDefault};
`;
