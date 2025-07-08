import styled from '@emotion/styled';

const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
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
        <InfoWrapper>
            <Img src={product.imageUrl} alt={product.name} />
            <div>
                <div>{product.name}</div>
                <div>{product.brand}</div>
                <div>상품가 {product.price.toLocaleString()}원</div>
            </div>
        </InfoWrapper>
    );
}
