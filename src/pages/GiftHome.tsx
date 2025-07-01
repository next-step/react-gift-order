import styled from '@emotion/styled';
import NavigationBar from '@/common/NavigationBar';
import SelectReceiverNotice from '@/components/giftHome/GiftSelect/SelectReceiverNotice';
import GiftCategoryList from '@/components/giftHome/GiftThemes/GiftCategoryList';
import GiftRanking from '@/components/giftHome/GiftRanking/GiftRanking';
const GiftHome = () => {
  return (
    <Layout>
      <Content>
        <NavigationBar />
        <SelectReceiverNotice />
        <GiftCategoryList />
        <GiftRanking />
      </Content>
    </Layout>
  );
};

export default GiftHome;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
`;
