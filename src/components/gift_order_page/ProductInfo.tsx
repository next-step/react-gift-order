import useOrderInfo from '@/hooks/useOrderInfo';
import giftItemData from '@/mock_data/giftItems';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: white;
`;

const Label = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
  margin-left: 1rem;
  margin-top: 0.7rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 2rem);
  height: 5.6rem;
  box-sizing: border-box;
  margin: 0.8rem 1rem 4.6rem 1rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray300};
  border-width: 1px;
`;

const ProductImg = styled.img`
  width: 4rem;
  aspect-ratio: 1 / 1;
  margin-left: 1rem;
  border-radius: 0.3rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-left: 0.8rem;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.body2Regular}
`;

const Brand = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray700};
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
`;

const PriceLabel = styled.div`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray700};
`;

const PriceValue = styled.div`
  ${({ theme }) => theme.typography.title2Bold}
  margin-left: 0.3rem;
`;

export const ProductInfo = () => {
  const { product } = useOrderInfo();
  const { id } = useParams();
  const parsedId = parseInt(id!);
  const giftItems = giftItemData;

  useEffect(() => {
    product.setId(parsedId);
    product.setPrice(giftItems[parsedId].price.basicPrice);
  }, [giftItems, product, parsedId]);

  return (
    <Container>
      <Label>상품 정보</Label>
      <Body>
        <ProductImg src={giftItems[parsedId].imageURL} />
        <Info>
          <Name>{giftItems[parsedId].name}</Name>
          <Brand>{giftItems[parsedId].brandInfo.name}</Brand>
          <Price>
            <PriceLabel>상품가</PriceLabel>
            <PriceValue>{giftItems[parsedId].price.basicPrice}원</PriceValue>
          </Price>
        </Info>
      </Body>
    </Container>
  );
};
