import styled from '@emotion/styled';
import type { Product } from '@/types/Product';

const Content = styled.section`
  padding: 0 16px;
  background: #fff;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title2Bold};
  padding: 12px 0;
`;

const Box = styled.div`
  display: flex;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  margin-bottom: 74px;
  gap: 12px;
`;

const ProductImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    ${({ theme }) => theme.typography.label1Regular};
  }
  .brand {
    ${({ theme }) => theme.typography.label2Regular};
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 4px;
  }
  .label {
    ${({ theme }) => theme.typography.label1Regular};
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-right: 4px;
  }
  .price {
    ${({ theme }) => theme.typography.body1Bold};
  }
`;

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <Content>
      <Title>상품 정보</Title>
      <Box>
        <ProductImg src={product.imageURL} alt={product.name} />
        <Info>
          <p className="name">{product.name}</p>
          <p className="brand">{product.brandInfo.name}</p>
          <p className="price">
            <span className="label">상품가</span>
            <span className="pricenum">{product.price.sellingPrice}원</span>
          </p>
        </Info>
      </Box>
    </Content>
  );
}
