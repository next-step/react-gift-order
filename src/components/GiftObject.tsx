import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

interface Gift {
  id: number;
  name: string;
  imageURL: string;
  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

interface GiftObjectProps {
  gift: Gift;
  onClick?: () => void;
}

const GiftObject = ({ gift, onClick }: GiftObjectProps) => {
  const theme = useTheme();
  return (
    <div onClick={onClick} css={giftStyle(theme)}>
      <img src={gift.imageURL} css={imageStyle()} />
      <div css={textContainerStyle()}>
        <p css={brandStyle(theme)}>{gift.brandInfo.name}</p>
        <h3 css={titleStyle(theme)}>{gift.name}</h3>
        <p css={priceStyle(theme)}>
          {gift.price.basicPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default GiftObject;

const giftStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: ${theme.colors.semantic.background.fill};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const imageStyle = () => css`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const textContainerStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const titleStyle = (theme: Theme) => css`
  font-size: ${theme.typography.label1Bold.size};
  font-weight: ${theme.typography.subtitle1Bold.weight};
`;

const priceStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body1Regular.size};
  font-weight: ${theme.typography.body1Regular.weight};
  color: ${theme.colors.semantic.text.default};
`;

const brandStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body2Regular.size};
  color: ${theme.colors.semantic.text.sub};
`;
