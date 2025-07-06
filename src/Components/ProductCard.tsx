import React from "react";
import styled from "@emotion/styled";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.gray.gray00};
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  padding: 18px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const RankBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ theme }) => theme.colors.red.red600};
  color: ${({ theme }) => theme.colors.gray.gray00};
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 2px 10px;
  z-index: 2;
`;

const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.gray.gray200};
  margin-bottom: 14px;
`;

const Brand = styled.span`
  ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.colors.gray.gray600};
  margin-bottom: 2px;
  display: block;
`;

const ProductName = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  line-height: 1.3;
  margin-bottom: 6px;
  word-break: keep-all;
`;

const Price = styled.span`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-top: 2px;
  display: block;
`;

interface ProductCardProps {
  rank?: React.ReactNode;
  image: string;
  brand: string;
  name: string;
  price: string;
}

const ProductCard = ({ rank, image, brand, name, price }: ProductCardProps) => (
  <Card>
    {rank && <RankBadge>{rank}</RankBadge>}
    <ProductImg src={image} alt={name} />
    <Brand>{brand}</Brand>
    <ProductName>{name}</ProductName>
    <Price>{price}</Price>
  </Card>
);

export default ProductCard; 