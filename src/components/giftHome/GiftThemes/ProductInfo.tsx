import styled from '@emotion/styled';

type ProductInfoProps = {
  imageURL: string;
  name: string;
  price: { basicPrice: number };
  brandInfo: { name: string };
};

const ProductInfo = ({
  imageURL,
  name,
  price,
  brandInfo,
}: ProductInfoProps) => {
  return (
    <Wrapper>
      <Title>상품 정보</Title>
      <InfoBox>
        <Image src={imageURL} alt={name} />
        <TextArea>
          <ProductName>{name}</ProductName>
          <BrandName>{brandInfo.name}</BrandName>
          <Price>
            상품가 <strong>{price.basicPrice.toLocaleString()}원</strong>
          </Price>
        </TextArea>
      </InfoBox>
    </Wrapper>
  );
};

export default ProductInfo;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  gap: 16px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProductName = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #333;
`;

const BrandName = styled.p`
  font-size: 14px;
  color: #999;
`;

const Price = styled.p`
  font-size: 14px;
  color: #333;

  strong {
    font-weight: 700;
    font-size: 15px;
  }
`;
