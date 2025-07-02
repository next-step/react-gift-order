import styled from '@emotion/styled';
import { TopNavBar } from '@/components/TopNavBar';
import { Category } from '@/components/gift_page/Category';
import { SelectFriend } from '@/components/gift_page/SelectFriend';
import { Banner } from '@/components/gift_page/Banner';
import { GiftList } from '@/components/gift_page/GiftList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const GiftShop = () => {
  return (
    <Container>
      <TopNavBar title="선물하기" mainPath="/" />
      <SelectFriend />
      <Category />
      <Banner />
      <GiftList />
    </Container>
  );
};

export default GiftShop;
