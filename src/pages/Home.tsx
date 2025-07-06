import Layout from '@/components/layout/Layout';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import SelectFriend from '@/components/section/SelectFriend';
import GiftCategoryList from '@/components/category/GiftCategoryList';
import Banner from '@/components/section/Banner';
import GiftGrid from '@/components/gift-ranking/GiftGrid';
import GiftItem from '@/components/gift-ranking/GiftItem';
import Filter from '@/components/filter/Filter';

function Home() {
  return (
    <Layout>
      <NavigationBar />
      <SelectFriend />
      <GiftCategoryList />
      <Banner />
      <Filter />
      <GiftGrid />
      <GiftItem
        rank={1}
        name="BBQ 양념치킨+콜라"
        imageURL="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
        price={29000}
        brand="BBQ"
      />
    </Layout>
  );
}

export default Home;
