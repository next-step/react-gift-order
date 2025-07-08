/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

const Container = styled.div`
  padding: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const GiftCard = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

interface BadgeProps {
  index: number;
}

const RankBadge = styled.div<BadgeProps>`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ index, theme }) =>
    index < 3 ? theme.colors.red600 : theme.colors.gray600};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductInfo = styled.div`
  padding: 8px;
`;

const Brand = styled.div`
  font-size: ${({ theme }) =>
    theme.typography.label2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;

const Name = styled.div`
  font-weight: bold;
  margin-top: 4px;
`;

const Price = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue700};
`;

const MoreButton = styled.button`
  margin: 24px auto 0;
  display: block;
  padding: 12px 24px;
  border: gray;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;
interface GiftItem {
  id: number;
  name: string;
  imageURL: string;
  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

export const giftItem: GiftItem = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
};

const mockData: GiftItem[] = Array(21).fill(giftItem);

export const RankingGrid = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = (id: number) => {
    if (isAuthenticated) {
      navigate(`/order/${id}`);
    } else {
      navigate('/login', { state: { redirectTo: `/order/${id}` } });
    }
  };

  const [visibleCount, setVisibleCount] = useState(6);

  const handleMore = () => setVisibleCount(mockData.length);

  return (
    <Container>
      <Grid>
        {mockData.slice(0, visibleCount).map((item, index) => (
          <GiftCard key={index} onClick={() => handleClick(item.id)}>
            <RankBadge index={index}>{index + 1}</RankBadge>
            <ProductImage src={item.imageURL} alt={item.name} />
            <ProductInfo>
              <Brand>{item.brandInfo.name}</Brand>
              <Name>{item.name}</Name>
              <Price>
                {item.price.sellingPrice.toLocaleString()}원
              </Price>
            </ProductInfo>
          </GiftCard>
        ))}
      </Grid>
      {visibleCount < mockData.length && (
        <MoreButton onClick={handleMore}>더보기</MoreButton>
      )}
    </Container>
  );
};
