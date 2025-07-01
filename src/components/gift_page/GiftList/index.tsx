import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { GiftItemDataType } from '@/types/giftItems';
import giftItemData from '@/mock_data/giftItems';
import { GiftCard } from './GiftCard';
import { Header } from './Header';
import { MoreButton } from './MoreButton';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.spacing2};
  width: calc(100% - ${({ theme }) => theme.spacing.spacing8});
  height: fit-content;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const GiftList = () => {
  const [giftItemList, getGiftItemList] = useState<GiftItemDataType[]>([]);
  const [giftItems, setGiftItems] = useState<GiftItemDataType[]>([]);
  const [isViewMore, setIsViewMore] = useState(false);

  useEffect(() => {
    getGiftItemList(giftItemData);
  }, []);

  useEffect(() => {
    if (isViewMore) {
      setGiftItems(giftItemList);
    } else {
      setGiftItems(giftItemList.slice(0, 6));
    }
  }, [giftItemList, isViewMore]);

  return (
    <>
      <Header />
      <Container>
        <List>
          {giftItems.map((item, i) => {
            return (
              <GiftCard
                key={i}
                id={i + 1}
                image={item.imageURL}
                brandName={item.brandInfo.name}
                price={item.price.basicPrice}
              />
            );
          })}
        </List>
      </Container>
      <MoreButton isViewMore={isViewMore} setIsViewMore={setIsViewMore} />
    </>
  );
};
