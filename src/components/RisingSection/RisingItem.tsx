/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import type { Product } from "../../mocks/types";

export default function RisingItem({ product }: { product: Product }) {
  const { name, imageURL, price, brandInfo } = product;

  return (
    <Card>
      <Image src={imageURL} alt={name} />
      <Info>
        <Brand>{brandInfo.name}</Brand>
        <Name>{name}</Name>
        <Price>{price.sellingPrice.toLocaleString()}원</Price>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.default};
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 8px;
  font-size: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray800};
`;

const Brand = styled.div`
  font-size: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 2px;
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray1000};
  margin-bottom: 4px;
`;

const Price = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray1000};
`;
