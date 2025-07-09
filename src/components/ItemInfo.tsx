import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import product from '@src/assets/mock/itemList_mock';

const space12 = css`
  height: ${theme.spacing.spacing3};
`;
const space24 = css`
  height: ${theme.spacing.spacing6};
`;

const space4 = css`
  height: ${theme.spacing.spacing1};
`;
const divStyle = css`
  width: 100%;
  padding: 0px 1rem;
  box-sizing: border-box;
`;
const pTitle = css`
  font-size: ${theme.typography.title2Bold.fontSize};
  font-weight: ${theme.typography.title2Bold.fontWeight};
  line-height: ${theme.typography.title2Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;
const itemBox = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 0.5rem;
  background-color: ${theme.colors.backgroundDefault};
  border: 1px solid ${theme.colors.borderDisabled};
  display: flex;
  gap: 12px;
  box-sizing: border-box;
`;
const imgStyle = css`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 1 / 1;
`;
const itemInfoDiv = css`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;
const itemTitleP = css`
  font-size: ${theme.typography.subtitle2Regular.fontSize};
  font-weight: ${theme.typography.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle2Regular.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;
const itemBrandP = css`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  color: ${theme.colors.gray700};
  margin: 0px;
  text-align: left;
`;
const priceP = css`
  font-size: ${theme.typography.subtitle2Bold.fontSize};
  font-weight: ${theme.typography.subtitle2Bold.fontWeight};
  line-height: ${theme.typography.subtitle2Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;
const spanStyle = css`
  font-size: ${theme.typography.subtitle2Regular.fontSize};
  font-weight: ${theme.typography.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle2Regular.lineHeight};
  color: ${theme.colors.gray700};
`;

const ItemInfo = () => {
  return (
    <div css={divStyle}>
      <div css={space12} />
      <p css={pTitle}>상품 정보</p>
      <div css={space12} />
      <div css={itemBox}>
        <img
          css={imgStyle}
          src={product.imageURL}
          alt=""
        />
        <div css={itemInfoDiv}>
          <p css={itemTitleP}>{product.name}</p>
          <p css={itemBrandP}>{product.brandInfo.name}</p>
          <div css={space4} />
          <p css={priceP}>
            <span css={spanStyle}>상품가 </span>
            {product.price.sellingPrice}원
          </p>
        </div>
      </div>
      <div css={space24} />
    </div>
  );
};

export default ItemInfo;
