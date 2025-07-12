/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';

type RankingCardProps = {
  rank: number;
  imageURL: string;
  brand: string;
  name: string;
  price: number;
  theme: ThemeType;
};

const RankingCard = ({ rank, imageURL, brand, name, price, theme }: RankingCardProps) => {
  return (
    <div css={card(theme)}>
      <div css={rankBadge(theme, rank)}>{rank}</div>
      <img src={imageURL} alt={name} css={image(theme)} />
      <p css={brandStyle(theme)}>{brand}</p>
      <p css={nameStyle(theme)}>{name}</p>
      <p css={priceStyle(theme)}>{price.toLocaleString()}원</p>
    </div>
  );
};

const card = (theme: ThemeType) => css`
  background-color: #fff;
  border-radius: ${theme.spacing[2]};
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const rankBadge = (theme: ThemeType, rank: number) => css`
  position: absolute;
  top: ${theme.spacing[2]};
  left: ${theme.spacing[2]};
  background-color: ${rank <= 3 ? theme.color.red.red700 : theme.color.gray.gray600};
  color: #fff;
  border-radius: 50%;
  width: ${theme.spacing[6]};
  height: ${theme.spacing[6]};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const image = (theme: ThemeType) => css`
  width: 100%;
  border-radius: ${theme.spacing[2]};
`;

const brandStyle = (theme: ThemeType) => css`
  font-size: 12px;
  margin-top: ${theme.spacing[2]};
  color: #666;
`;

const nameStyle = (theme: ThemeType) => css`
  font-size: 14px;
  font-weight: 500;
  margin-top: ${theme.spacing[1]};
`;

const priceStyle = (theme: ThemeType) => css`
  font-size: 14px;
  font-weight: 700;
  margin-top: ${theme.spacing[1]};
`;

export default RankingCard;
