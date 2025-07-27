import {
  Container,
  Title,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  BrandName,
  ProductPrice,
} from './ProductInfo.styles';
import type { Product } from '@/data/product';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Container>
      <Title>상품 정보</Title>
      <ProductCard>
        <ProductImage src={product.imageURL} alt={product.name} />
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <BrandName>{product.brandInfo.name}</BrandName>
          <ProductPrice>
            상품가 {product.price.sellingPrice.toLocaleString()}원
          </ProductPrice>
        </ProductDetails>
      </ProductCard>
    </Container>
  );
};

export default ProductInfo;
