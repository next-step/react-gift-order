import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing4} 0;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin: ${({ theme }) => theme.spacing.spacing4} 0;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
`;

interface Product {
    imageUrl: string;
    name: string;
    brand: string;
    price: number;
}

export default function ProductInfoSection({ product }: { product: Product }) {
    return (
        <Wrapper>
            <Label htmlFor="productInfo">상품 정보</Label>
            <InfoWrapper>
                <Img src={product.imageUrl} alt={product.name} />
                <div>
                    <div>{product.name}</div>
                    <div>{product.brand}</div>
                    <div>상품가 {product.price.toLocaleString()}원</div>
                </div>
            </InfoWrapper>
        </Wrapper>
    );
}
