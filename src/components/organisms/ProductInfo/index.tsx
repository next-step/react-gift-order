import { type RankingItem } from '@/data/ranking';
import * as S from './styles';

interface ProductInfoProps {
  product: RankingItem;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <S.Container>
      <S.SectionTitle>상품 정보</S.SectionTitle>
      <S.Divider />
      
      <S.ProductContent>
        <S.ProductImage src={product.imageURL} alt="product" />
        <S.ProductDetails>
          <S.ProductName>{product.name}</S.ProductName>
          <S.BrandName>{product.brandInfo.name}</S.BrandName>
          <S.PriceDivider />
          <S.PriceContainer>
            <S.PriceLabel>상품가</S.PriceLabel>
            <S.Price>{product.price.sellingPrice.toLocaleString()}원</S.Price>
          </S.PriceContainer>
        </S.ProductDetails>
      </S.ProductContent>
      
      <S.BottomDivider />
    </S.Container>
  );
};

export default ProductInfo; 