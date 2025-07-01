import {
  BrandName,
  PriceAmount,
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RankBadge,
} from './ProductCard.styles';

export interface ProductCardPropsType {
  imageURL: string;
  name: string;
  brandName: string;
  sellingPrice: number;
  index: number;
}

function ProductCard({ imageURL, name, brandName, sellingPrice, index }: ProductCardPropsType) {
  return (
    <ProductCardContainer>
      <RankBadge isTopThree={index < 3}>{index + 1}</RankBadge>
      <ProductImage src={imageURL} alt={name} />
      <ProductInfo>
        <BrandName>{brandName}</BrandName>
        <ProductName>{name}</ProductName>
      </ProductInfo>
      <ProductPrice>
        <PriceAmount>{sellingPrice.toLocaleString()}</PriceAmount> 원
      </ProductPrice>
    </ProductCardContainer>
  );
}

export default ProductCard;
