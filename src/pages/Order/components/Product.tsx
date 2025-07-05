import Divider from "@/components/common/Divider";
import type { RankingItemType } from "@/types/RankingItemType";
import styled from "@emotion/styled";

interface ProductProps {
  product: RankingItemType;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Content>
      <Divider spacing="1rem" />
      <Title>상품 정보</Title>
      <Divider spacing="1rem" />
      <ProductWrapper>
        <ProductImg alt="product" src={product.imageURL} />
        <div>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductBrand>{product.brandInfo.name}</ProductBrand>
          <ProductPrice>
            <ProductPriceInfo>상품가 </ProductPriceInfo>
            {product.price.sellingPrice}원
          </ProductPrice>
        </div>
      </ProductWrapper>
      <Divider spacing="1.5rem" />
    </Content>
  );
};

export default Product;

const Content = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.title2Bold};
  text-align: left;
`;
const ProductWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const ProductImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;
const ProductTitle = styled.p`
  font: ${({ theme }) => theme.typography.body2Regular};
  text-align: left;
`;
const ProductBrand = styled.p`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.gray600};
  text-align: left;
`;
const ProductPriceInfo = styled.span`
  font: ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.color.gray600};
`;
const ProductPrice = styled.p`
  font: ${({ theme }) => theme.typography.label2Bold};
  text-align: left;
`;
