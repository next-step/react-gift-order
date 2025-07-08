import styled from '@emotion/styled';
import type { Product } from '@/types/product';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Wrapper>
      <Label>상품 정보</Label>
      <ProductWrapper>
        <ProductImage src={product.imageURL} alt={product.name} />
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <BrandName>{product.brandInfo.name}</BrandName>
          <ProductPrice>
            <span>상품가 </span>
            {product.price.sellingPrice.toLocaleString()}원
          </ProductPrice>
        </ProductDetails>
      </ProductWrapper>
    </Wrapper>
  );
};

export default ProductInfo;

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const Label = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const ProductWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const ProductName = styled.p`
  ${({ theme }) => theme.typography.body.body1Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const BrandName = styled.p`
  ${({ theme }) => theme.typography.label.label1Regular};
  color: ${({ theme }) => theme.color.gray[600]};
`;

const ProductPrice = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;
