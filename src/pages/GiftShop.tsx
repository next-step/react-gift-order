import styled from '@emotion/styled';
import { Header } from '@/components/Header';
import { Category } from '@/components/gift_page/Category';
import { SelectFriend } from '@/components/gift_page/SelectFriend';
import { Banner } from '@/components/gift_page/Banner';
import { GiftList } from '@/components/gift_page/GiftList';
import type { Path } from '@/types/path';

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

const GiftShop = ({ prevPath, setPrevPath }: Path) => {
  return (
    <Container>
      <Header title="선물하기" mainPath="/" prevPath={prevPath} setPrevPath={setPrevPath} />
      <SelectFriend />
      <Category />
      <Banner />
      <GiftList />
    </Container>
  );
};

export default GiftShop;
